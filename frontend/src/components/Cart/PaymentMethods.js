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
            <Button label="OXXO" className="bg-slate-300 w-full mt-4" onClick={() => handlePurchase({ name: 'OXXO' })} />
            <Button label="Paypal" className="bg-slate-300 w-full mt-4" onClick={() => handlePurchase({ name: 'Paypal' })} />
            <Button className="bg-slate-300 w-full mt-4" onClick={() => handlePurchase({ name: 'Visa' })}>
                <div className="flex items-center justify-center">
                    <span className="mr-2">Visa</span>
                    <FontAwesomeIcon icon={faCreditCard} />
                </div>
            </Button>
        </div>
    );
}
