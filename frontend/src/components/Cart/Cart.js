import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CartProduct from '../Product/CartProduct';
import OrderSumary from './OrderSumary'; 
import PaymentMethod from './PaymentMethods';
import { useCart } from '../../context/CartContext';
import ReturnToHome from '../Home/ReturnToHome';

function Cart() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/pagar';
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <ReturnToHome message='Aun no has garegado productos.'/> 
    );
  }

  return (
    <div>
      <div>
        {!isCheckoutPage &&
        <Link to="/">
          <button className="flex flex-row items-center space-x-2 text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
            </svg>
            <p>Regresar al inicio</p>
          </button>
        </Link>}
        {isCheckoutPage &&
        <Link to="/carrito">
          <button className="flex flex-row items-center space-x-2 text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
            </svg>
            <p>Regresar al carrito</p>
          </button>
        </Link>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CartProduct/>
      <div className="space-y-5">
        <OrderSumary/>
        {isCheckoutPage && <PaymentMethod/>}
      </div>
    </div>
    </div>
  );
}

export default Cart;
