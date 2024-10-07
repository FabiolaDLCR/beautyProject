
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]); 
  const [isCartVisible, setIsCartVisible] = useState(false); 

  const addToCart = (product, quantity) => {
    setCartCount(cartCount + quantity);
    setCartItems([...cartItems, { ...product, quantity }]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, cartItems, isCartVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
};
