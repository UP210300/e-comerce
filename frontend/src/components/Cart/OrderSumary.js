import React from 'react'; 
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 

export default function OrderSummary() {
  const { cart, selectedItems } = useCart();

  const filteredCart = selectedItems.length > 0 
    ? cart.filter(item => selectedItems.includes(item.id))
    : cart;

  const totalItems = filteredCart.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalPrice = filteredCart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-10">
      <div className="border-b border-black">
        <p className="font-bold text-xl">Resumen del pedido</p>
        {selectedItems.length > 0 ? (
          <>
            <p>Total de artículos: {totalItems}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </>
        ) : (
          <p className="text-gray-500">No hay productos seleccionados.</p>
        )}
      </div>
      <Link to="/pagar">
        <Button label="Comprar y pagar" className="bg-primary-500 h-12 w-full mt-4" />
      </Link>
    </div>
  );
}
