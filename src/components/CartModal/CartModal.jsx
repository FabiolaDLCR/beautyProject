import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './CartModal.css';

function CartModal() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <div className="cart-summary">
          <h2>Resumen del pedido</h2>
          <p>Total de artículos: {cartCount}</p>
          {/* Aquí puedes agregar más detalles sobre los productos */}
        </div>
        <div className="cart-form">
          <h2>Datos del comprador</h2>
          <form>
            <input type="text" placeholder="Nombre y apellido" />
            <input type="text" placeholder="Teléfono" />
            <input type="text" placeholder="Estado" />
            <input type="text" placeholder="Ciudad" />
            <input type="text" placeholder="Código Postal" />
            <input type="email" placeholder="Correo electrónico" />
            <button type="submit">Finalizar compra</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
