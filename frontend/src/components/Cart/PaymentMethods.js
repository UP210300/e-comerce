import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function BasicDemo() {
    const toast = useRef(null);
    const navigate = useNavigate();

    const handlePurchase = (product) => {
        toast.current.show({
            severity: 'success',
            summary: 'Compra Realizada',
            detail: `Compra Exitosa...`,
            life: 3000
        });

        setTimeout(() => {
            navigate("/");
        }, 3000);
    };

    return (
        <div className="p-10">
            <Toast ref={toast} />
            <div>
                <p className="font-bold text-xl mb-1">Seleccione método de pago</p>
            </div>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={() => handlePurchase({ name: 'OXXO' })}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/Oxxo_Logo.svg' alt={'Oxxo logo'} className="w-10"  />
                    <h1>Oxxo</h1>
                </div>   
            </Button>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={() => handlePurchase({ name: 'Paypal' })}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/PayPal_Logo.svg' alt={'Paypal logo'} className="w-10 bg-gray-100 p-1 rounded-md" />
                    <h1>Paypal</h1>
                </div>
            </Button>
            <Button className="bg-primary-500 w-full mt-4 p-1" onClick={() => handlePurchase({ name: 'Visa' })}>
                <div className="flex flex-row items-center justify-center w-full space-x-2">
                    <img src='assets/icons/Mastercard-logo.svg' alt={'Mastercard logo'} className="w-10 bg-gray-100 p-1 rounded-md" />
                    <img src='assets/icons/Visa_Inc._logo.svg' alt={'Visa logo'}  className="w-10 bg-gray-100 p-1 rounded-md" />
                    <h1 className="font-semibold">Tarjeta</h1>  
                </div>
            </Button>
        </div>
    );
}
