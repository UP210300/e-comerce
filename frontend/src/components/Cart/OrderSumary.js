import React from "react";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function BasicDemo() {
    return (
        <div className="p-10">
            <div className="border-b border-black">
                <p className="font-bold text-xl">Resumen del pedido</p>
                <p>Total de artículos:</p>
                <p>Total:</p>    
            </div>
            <Link to="/pagar">
                <Button label="Comprar y pagar" className="bg-slate-300 w-full mt-4" />
            </Link>
        </div>
    );
}
