import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import CartProduct from '../Product/CartProduct';
import OrderSumary from './OrderSumary';
import PaymentMethod from './PaymentMethods';

function Cart() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/pagar';

  return (
    <div className="grid md:grid-cols-2">
      <CartProduct/>
      <div>
        <OrderSumary/>
        {isCheckoutPage &&<PaymentMethod/>}
      </div>
    </div>
  );
}

export default Cart;
