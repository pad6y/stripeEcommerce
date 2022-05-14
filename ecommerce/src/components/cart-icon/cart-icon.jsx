import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cart-context';
import shoppingBag from '../../assets/shopping-bag.png';
import '../cart-icon/cart-icon.styles.scss';

function CartIcon() {
  const { itemCount } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cart-container">
        <img src={shoppingBag} alt="cart-icon" />
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </div>
    </Link>
  );
}

export default CartIcon;
