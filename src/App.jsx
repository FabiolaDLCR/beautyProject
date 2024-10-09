import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, CartContext } from './context/cartContext';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartModal from './components/CartModal/CartModal';
import './index.css';

const AppContent = () => {
  const { isCartVisible, setIsCartVisible } = useContext(CartContext);

  const handleCloseModal = () => {
    setIsCartVisible(false);
  };

  return (
    <div className='App'>
      <NavBar />
      <CartWidget />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
      </Routes>

      {isCartVisible && <CartModal onClose={handleCloseModal} />} {/* Se mostrará cuando isCartVisible sea true */}
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
