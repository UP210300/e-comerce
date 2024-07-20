import React from "react";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

export default function OrderSummary() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-10">
      <div className="border-b border-black">
        <p className="font-bold text-xl">Resumen del pedido</p>
        <p>Total de artículos: {totalItems}</p>
        <p>Total: ${totalPrice.toFixed(2)}</p>    
      </div>
      <Link to="/pagar">
        <Button label="Comprar y pagar" className="bg-slate-300 w-full mt-4" />
      </Link>
    </div>
  );
}
