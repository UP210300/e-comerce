import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
