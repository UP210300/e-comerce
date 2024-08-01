import React from 'react';
import { useLocation } from 'react-router-dom';
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
