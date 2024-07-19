import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Tailwind from 'primereact/passthrough/tailwind';
import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './styles/tailwind.css';

import App from './components/App/App';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/Product/ProductDetail';
import Login from './components/Login/Login';
import ErrorPage from './components/Error/ErrorPage';
import Register from './components/Login/Register';
import ProtectedRoute from './components/Login/ProtectedRoute';
import UserProfile from './components/UserProfile/UserProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detalle-de-producto",
        element: <ProductDetail />,
      },
      {
        path: "/carrito",
        element: <Cart />,
      },
      {
        path: "/pagar",
        element: <ProtectedRoute />, // Utiliza ProtectedRoute para la ruta de pago
        children: [
          {
            path: "/pagar",
            element: <Cart />, // Esta es la ruta protegida que muestra el carrito (pago)
          }
        ]
      },
      {
        path: "/perfil",
        element: <ProtectedRoute />, // Utiliza ProtectedRoute para la ruta de pago
        children: [
          {
            path: "/perfil",
            element: <UserProfile />, // Esta es la ruta protegida que muestra el carrito (pago)
          }
        ]
      },
      {
        path: "/iniciar-sesion",
        element: <Login />,
      },
      {
        path: "/registrarme",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </PrimeReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
