import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import Tailwind from 'primereact/passthrough/tailwind';
import { PrimeReactProvider } from "primereact/api";
import './index.css';
import './styles/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </PrimeReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
