import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { OrderList } from 'primereact/orderlist';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import { useUser } from '../../context/UserContext'; 

const PurchaseHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useUser();

    useEffect(() => {
        const fetchOrders = async () => {
            const userId = localStorage.getItem('userId');
            
            if (!userId) {
                console.error('User ID not found in localStorage');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/api/orders/by-customer/${userId}`);
                const ordersData = response.data;
                console.log('Orders data:', ordersData);

                if (!Array.isArray(ordersData)) {
                    console.error('Expected orders data to be an array.');
                    setLoading(false);
                    return;
                }

                const orderDetailsPromises = ordersData.map(async order => {
                    console.log('Order:', order);

                    if (!order.idOrder) {
                        console.error('Order ID is missing for order:', order);
                        return null;
                    }

                    try {
                        const detailsResponse = await axios.get(`http://localhost:8080/api/order-details/order/${order.idOrder}`);
                        console.log(`Order details for order ${order.idOrder}:`, detailsResponse.data);
                        const productDetails = await Promise.all(
                            detailsResponse.data.map(async detail => {
                                try {
                                    const productResponse = await axios.get(`http://localhost:8080/api/products/${detail.id_product}`);
                                    return {
                                        ...detail,
                                        ...productResponse.data
                                    };
                                } catch (productError) {
                                    console.error(`Error fetching product details for product ${detail.id_product}:`, productError.response ? productError.response.data : productError.message);
                                    return null;
                                }
                            })
                        );

                        return {
                            ...order,
                            products: productDetails.filter(product => product !== null)
                        };
                    } catch (detailsError) {
                        console.error(`Error fetching details for order ${order.idOrder}:`, detailsError.response ? detailsError.response.data : detailsError.message);
                        return {
                            ...order,
                            products: []
                        };
                    }
                });

                const ordersWithDetails = await Promise.all(orderDetailsPromises);
                setOrders(ordersWithDetails.filter(order => order !== null));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching orders:', error.response ? error.response.data : error.message);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const itemTemplate = (item) => {
        const totalPrice = item.price * item.quantity;
        console.log('Item in itemTemplate:', item); // Verifica la estructura de cada producto
        return (
            <div className="flex flex-wrap p-4 items-center gap-4 border-b border-gray-300 rounded-lg">
                <img className="w-16 h-16 object-cover rounded-md shadow-md" src={item.images[0]?.imageUrl || 'default-image.jpg'} alt={item.name} />
                <div className="flex-1 flex flex-col gap-2 xl:mr-8">
                    <span className="font-semibold text-lg text-gray-800">{item.name || 'Nombre del Producto'}</span>
                </div>
                <div className="text-right">
                    <span className="font-semibold text-xl text-gray-800">${totalPrice.toFixed(2)}</span>
                    <span className="text-sm block mt-1 text-gray-600">Cantidad: {item.quantity || 0}</span>
                </div>
            </div>
        );
    };

    if (loading) {
        return <div className="text-center p-6">Cargando...</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Link to="/">
                <button className="flex flex-row items-center space-x-2 text-blue-500 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
                    </svg>
                    <p>Regresar al inicio</p>
                </button>
            </Link>
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-white bg-[#1f389b] p-4 rounded-lg">
                    Historial de Compras
                </h2>
                {orders.length > 0 ? (
                    <div className="space-y-6">
                        {orders.map(order => (
                            <div key={order.idOrder} className="p-6 mb-6 bg-white rounded-lg shadow-md border border-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                <h3 className="text-xl font-semibold mb-4 text-[#1f389b]">Orden realizada el {new Date(order.orderDate).toLocaleDateString()}</h3>
                                <div className="space-y-4">
                                    {order.products && order.products.length > 0 ? (
                                        order.products.map(product => itemTemplate(product))
                                    ) : (
                                        <div>No hay detalles para esta orden.</div>
                                    )}
                                </div>
                                <div className="border-t border-gray-200 mt-4 pt-4 text-right">
                                    <span className="font-semibold text-xl text-[#1f389b]">Total: ${order.amount.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 text-xl font-bold">
                        No hay órdenes para mostrar.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PurchaseHistory;