import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Asegúrate de tener este contexto
import cart from './assets/cart.svg';
import './CartWidget.css'; // Importa el archivo de estilo

function CartWidget() {
    const { cartCount } = useContext(CartContext); // Se obtiene la cantidad del contexto

    return (
      <div className="cart-icon">
        <img src={cart} alt="cart-icon" />
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span> // Muestra el número del carrito
        )}
      </div>
    );
}

export default CartWidget;
