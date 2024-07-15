import React from "react";
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

export default function BasicDemo() {
    return (
        <div className="p-10">
            <div>
                <p className="font-bold text-xl mb-1">Seleccione método de pago</p>
            </div>
            <Button label="OXXO" className="bg-slate-300 w-full mt-4" />
            <Button label="Paypal" className="bg-slate-300 w-full mt-4" />
            <Button className="bg-slate-300 w-full mt-4">
                <div className="flex items-center justify-center">
                    <span className="mr-2">Visa</span>
                    <FontAwesomeIcon icon={faCreditCard} />
                </div>
            </Button>
        </div>
    );
}
