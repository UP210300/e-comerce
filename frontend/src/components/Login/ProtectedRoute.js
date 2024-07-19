
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token'); 

  if (!token) {
    return <Navigate to="/iniciar-sesion" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
