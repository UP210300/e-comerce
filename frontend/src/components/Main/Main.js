import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import ProductDetail from '../Product/ProductDetail';
import CartProduct from '../Product/CartProduct'

function Main() {
  return (
    <div className="px-20 py-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/detalle-de-producto" element={<ProductDetail />} />
          <Route path="/card-producto" element={<CartProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
