import React from 'react'; 
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

export default function OrderSummary() {
  const { cart, selectedItems } = useCart();

  const filteredCart = selectedItems.length > 0 
    ? cart.filter(item => selectedItems.includes(item.id))
    : cart;

  const totalItems = filteredCart.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalPrice = filteredCart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  if (cart.length === 0) {
    return null; // No renderizar nada si el carrito está vacío
  }

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
