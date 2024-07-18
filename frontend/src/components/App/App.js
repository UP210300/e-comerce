import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CheckoutBar from '../NavBar/CheckoutBar';

function App() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/pagar';
  const isLoginPage = location.pathname === '/iniciar-sesion';
  const isRegisterPage = location.pathname === '/registrarme';

  return (
    <div>
      {!isCheckoutPage && !isLoginPage && !isRegisterPage && <NavBar />}
      {isCheckoutPage && <CheckoutBar />}
      <div className="px-10 g:px-20 py-10">
        <Outlet /> 
      </div>
    </div>
  );
}

export default App;
