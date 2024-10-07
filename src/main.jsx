import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/cartContext'; // Importa el CartProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> {/* Asegúrate de que el CartProvider envuelva la App */}
      <App />
    </CartProvider>
  </React.StrictMode>,
);
