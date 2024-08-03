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

    const handlePurchase = async (paymentMethod) => {
        const orderDetails = cart.map(item => ({
            idProduct: item.id,
            price: item.price,
            quantity: item.quantity,
        }));

        const orderData = {
            customer: { id: user ? user.id : null }, // Asegúrate de que 'user' no sea null
            amount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
            shippingAddress: '123 Main St', // Dirección de envío de ejemplo
            orderDate: new Date().toISOString(),
            orderStatus: 'Pending',
            orderDetails: orderDetails,
        };

        try {
            await axios.post('http://localhost:8080/api/orders/addOrder', orderData);
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
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Hubo un problema al realizar la compra.',
                life: 3000,
            });
        }
    };

    return (
        <div className="p-10">
            <Toast ref={toast} />
            <div>
                <p className="font-bold text-xl mb-1">Seleccione método de pago</p>
            </div>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={() => handlePurchase('OXXO')}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/Oxxo_Logo.svg' alt='Oxxo logo' className="w-10" />
                    <h1>Oxxo</h1>
                </div>
            </Button>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={() => handlePurchase('Paypal')}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/PayPal_Logo.svg' alt='Paypal logo' className="w-10 bg-gray-100 p-1 rounded-md" />
                    <h1>Paypal</h1>
                </div>
            </Button>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={() => handlePurchase('Visa')}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/Mastercard-logo.svg' alt='Mastercard logo' className="w-10 bg-gray-100 p-1 rounded-md" />
                    <img src='assets/icons/Visa_Inc._logo.svg' alt='Visa logo' className="w-10 bg-gray-100 p-1 rounded-md" />
                    <h1 className="font-semibold">Tarjeta</h1>
                </div>
            </Button>
        </div>
    );
}
