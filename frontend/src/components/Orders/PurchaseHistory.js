import React from 'react';
import { OrderList } from 'primereact/orderlist';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';

const PurchaseHistory = () => {
    const orderDetails = [
        {
            id: 1,
            purchaseDate: '2024-07-25',
            products: [
                {
                    id: 101,
                    productName: 'Producto A',
                    category: 'Categoría 1',
                    productPrice: 100,
                    quantity: 2,
                    productImage: 'https://via.placeholder.com/150',
                },
                {
                    id: 102,
                    productName: 'Producto B',
                    category: 'Categoría 2',
                    productPrice: 200,
                    quantity: 1,
                    productImage: 'https://via.placeholder.com/150',
                },
            ],
        },
        {
            id: 2,
            purchaseDate: '2024-07-26',
            products: [
                {
                    id: 103,
                    productName: 'Producto C',
                    category: 'Categoría 3',
                    productPrice: 300,
                    quantity: 3,
                    productImage: 'https://via.placeholder.com/150',
                },
            ],
        },
    ];

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-4 items-center gap-4 border-b border-gray-200">
                <img className="w-16 h-16 object-cover rounded shadow-md" src={item.productImage} alt={item.productName} />
                <div className="flex-1 flex flex-col gap-2 xl:mr-8">
                    <span className="font-semibold text-lg">{item.productName}</span>
                    <div className="flex items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span className="text-sm text-gray-600">{item.category}</span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="font-semibold text-xl text-gray-800">${item.productPrice}</span>
                    <span className="text-sm block mt-1 text-gray-600">Cantidad: {item.quantity}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-6">Historial de Compras</h2>
            {orderDetails.map(order => (
                <div key={order.id} className="p-6 mb-6 bg-white rounded shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Orden realizada el {new Date(order.purchaseDate).toLocaleDateString()}</h3>
                    <OrderList dataKey="id" value={order.products} itemTemplate={itemTemplate} header="Productos Comprados" />
                </div>
            ))}
        </div>
    );
};

export default PurchaseHistory;
