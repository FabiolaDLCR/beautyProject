import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    // Función para agregar productos al carrito
    const addToCart = (product, quantity) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // Si el producto ya está en el carrito, actualizamos la cantidad
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                // Si el producto no está en el carrito, lo añadimos
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    // Función para contar el total de productos en el carrito
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Función para calcular el total del carrito
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Función para alternar la visibilidad del carrito
    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, isCartVisible, setIsCartVisible, cartCount, getTotalPrice, toggleCartVisibility }}>
            {children}
        </CartContext.Provider>
    );
};
