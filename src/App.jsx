// src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, CartContext } from './context/cartContext';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartModal from './components/CartModal/CartModal';
import './index.css';

const AppContent = () => {
  const { isCartVisible } = useContext(CartContext);

  return (
    <div className='App'>
      <NavBar />
      <CartWidget />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        {/* Otras rutas */}
      </Routes>
      {isCartVisible && <CartModal />}
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router basename="/beautyProject"> 
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
