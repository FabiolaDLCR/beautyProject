import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);


    const addToCart = (product, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, isCartVisible, setIsCartVisible, cartCount, getTotalPrice, toggleCartVisibility }}>
            {children}
        </CartContext.Provider>
    );
};
