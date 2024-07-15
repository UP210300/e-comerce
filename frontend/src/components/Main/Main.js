import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import ProductDetail from '../Product/ProductDetail';
import CartProduct from '../Product/CartProduct';
import OrderSumary from '../Cart/OrderSumary';
import PaymentMethods from '../Cart/PaymentMethods';

function Main() {
  return (
    <div className="px-20 py-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/detalle-de-producto" element={<ProductDetail />} />
          <Route path="/card-producto" element={<CartProduct />} />
          <Route path="/order-summary" element={<OrderSumary />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
