import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

export default function PaymentMethods() {
    const toast = useRef(null);
    const navigate = useNavigate();
    const { cart, clearCart } = useCart();
    const { user } = useUser();

    const handlePurchase = async () => {
        if (!user || !user.userId) {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Usuario no autenticado.',
                life: 3000,
            });
            return;
        }
    
        const orderDetails = cart.map(item => ({
            idProduct: item.id,
            price: item.price,
            quantity: item.quantity,
        }));
    
        const orderData = {
            idCustomer: user.userId, 
            amount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
            shippingAddress: '123 Main St', 
            orderDate: new Date().toISOString().split('T')[0], 
            orderStatus: 'Pending',
            orderDetails: orderDetails,
        };
    
        try {

            const response = await axios.post('http://146.190.12.213:8080/api/orders/addOrder', orderData);
            const createdOrder = response.data;

            const orderDetailsPromises = orderDetails.map(async (detail) => {
                await axios.post(`http://146.190.12.213:8080/api/order-details/${createdOrder.idOrder}/${detail.idProduct}`, detail);
            });

            await Promise.all(orderDetailsPromises);

            toast.current.show({
                severity: 'success',
                summary: 'Compra Realizada',
                detail: 'Compra Exitosa...',
                life: 3000,
            });
    
            clearCart();
    
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Error durante la creación de la orden:', error);
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Hubo un problema al realizar la compra.',
                life: 3000,
            });
        }
    };

    return (
        <div className="md:p-10">
            <Toast ref={toast} />
            <div>
                <p className="font-bold text-xl mb-1">Seleccione método de pago</p>
            </div>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={handlePurchase}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/Oxxo_Logo.svg' alt='Oxxo logo' className="w-10" />
                    <h1>Oxxo</h1>
                </div>
            </Button>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={handlePurchase}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/PayPal_Logo.svg' alt='Paypal logo' className="w-10 bg-gray-100 p-1 rounded-md" />
                    <h1>Paypal</h1>
                </div>
            </Button>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={handlePurchase}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/Mastercard-logo.svg' alt='Mastercard logo' className="w-10 bg-gray-100 p-1 rounded-md" />
                    <img src='assets/icons/Visa_Inc._logo.svg' alt='Visa logo' className="w-10 bg-gray-100 p-1 rounded-md" />
                    <h1 className="font-semibold">Tarjeta</h1>
                </div>
            </Button>
        </div>
    );
}