import React from 'react';
import { useLocation } from 'react-router-dom';
import CartProduct from '../Product/CartProduct';
import OrderSumary from './OrderSumary'; 
import PaymentMethod from './PaymentMethods';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/pagar';
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="text-2xl font-bold mb-2">Sin productos en el carrito.</p>
        <Link to="/" className="w-full max-w-xs">
          <button className="w-full px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
            Regresar a la página principal
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2">
      <CartProduct/>
      <div>
        <OrderSumary/>
        {isCheckoutPage && <PaymentMethod/>}
      </div>
    </div>
  );
}

export default Cart;
