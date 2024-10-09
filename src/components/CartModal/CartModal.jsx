import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './CartModal.css';

const CartModal = ({ onClose }) => {
    const { cartItems, getTotalPrice } = useContext(CartContext); 

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>

                <div className="cart-items-summary">
                    <h2>Resumen del Pedido</h2>
                    {cartItems.length > 0 ? (
                        <div>
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <p>{item.name}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: ${item.price}</p>
                                    <p>Subtotal: ${item.price * item.quantity}</p>
                                </div>
                            ))}
                            <h3>Total: ${getTotalPrice()}</h3>
                        </div>
                    ) : (
                        <p>Tu carrito está vacío.</p>
                    )}
                </div>

                <div className="user-info-form">
                    <h2>Datos del Usuario</h2>
                    <form>
                        <input type="text" placeholder="Nombre y Apellido" />
                        <input type="text" placeholder="Teléfono" />
                        <input type="text" placeholder="Estado" />
                        <input type="text" placeholder="Ciudad" />
                        <input type="text" placeholder="Código Postal" />
                        <input type="email" placeholder="Correo Electrónico" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
