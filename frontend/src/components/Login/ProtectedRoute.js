
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token'); 
  console.log("Token:", token); // Agregar este registro

  if (!token) {
    console.log("No hay token" ); // Agregar este registro
    return <Navigate to="/iniciar-sesion" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
