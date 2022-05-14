import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import { auth } from '../../firebase/index';
import { UserContext } from '../../context/user-context';
import './header.styles.scss';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">Pad6Y</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        {!user && (
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        )}
        {user && (
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </li>
        )}
        {!user && (
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}
      </ul>
      <CartIcon />
    </nav>
  );
}

export default Header;
