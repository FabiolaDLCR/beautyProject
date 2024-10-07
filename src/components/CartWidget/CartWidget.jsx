
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cart from './assets/cart.svg';
import './CartWidget.css';

function CartWidget() {
    const { cartCount, toggleCartVisibility } = useContext(CartContext);

    return (
      <div className="cart-icon" onClick={toggleCartVisibility}>
        <img src={cart} alt="cart-icon" />
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span> 
        )}
      </div>
    );
}

export default CartWidget;
