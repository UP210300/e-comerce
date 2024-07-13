import React from "react";
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <div className="ml-4 w-1/4">
                <div className="border-b border-black pb-2">
                    <p className="font-bold text-xl mb-1">Resumen del pedido</p>
                    <p>Total de artículos:</p>
                    <p>Total:</p>
                </div>
                <Button label="Comprar y pagar" className="bg-slate-300 w-full mt-4" />
            </div>
        </div>
    );
}
