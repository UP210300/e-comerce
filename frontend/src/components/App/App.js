import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CheckoutBar from '../NavBar/CheckoutBar';

function App() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/pagar';

  return (
    <div>
      {!isCheckoutPage &&<NavBar />}
      {isCheckoutPage && <CheckoutBar />}
      <div className="px-10 g:px-20 py-10">
        <Outlet /> 
      </div>
    </div>
  );
}

export default App;
