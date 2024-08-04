// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Tailwind from 'primereact/passthrough/tailwind';
import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import RouteProductList from './components/Product/RouteProductList';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { PurchaseHistory } from './components/Orders';
import { Offers } from './components/Offers';
import { UserProvider } from './context/UserContext'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detalle-de-producto/:id", element: <ProductDetail /> },
      { path: "/carrito", element: <Cart /> },
      { path: "/iniciar-sesion", element: <Login /> },
      { path: "/registrarme", element: <Register /> },
      { path: "/buscar/:query", element: <RouteProductList/>},
      { path: "/compras", element: <PurchaseHistory/>},
      { path: "/ofertas", element: <Offers/>},
      {
        path: "/pagar",
        element: <ProtectedRoute />,
        children: [{ path: "", element: <Cart /> }],
      },
      {
        path: "/perfil",
        element: <ProtectedRoute />, 
        children: [{ path: "", element: <UserProfile /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
    <React.StrictMode>
      <SearchProvider>
        <CartProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </CartProvider>
      </SearchProvider>
    </React.StrictMode>
  </PrimeReactProvider>
);

reportWebVitals();
