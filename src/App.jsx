import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { CartProvider } from './context/cartContext'; // Importamos el CartProvider

function App() {
  return (
    <CartProvider> {/* Envolvemos la app con el CartProvider */}
      <Router>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
          </Routes>
          <ItemListContainer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
