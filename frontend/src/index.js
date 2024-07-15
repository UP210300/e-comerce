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
        path: "/carrito",
        element: <Cart />,
      },
      {
        path: "/detalle-de-producto",
        element: <ProductDetail />,
      },
      {
        path: "/iniciar-sesion",
        element: <Login />,
      },
      {
        path: "/pagar",
        element: <  Cart />,
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
