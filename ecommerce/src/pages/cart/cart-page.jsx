import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../../components/shared/layout';
import CartItem from './cart-item';
import Total from './total';

import './cart-page.styles.scss';

function CartPage() {
  const { cartItems, itemCount, total, increase, decrease, remove, clear } =
    useContext(CartContext);
  // console.log(cartItems, itemCount);

  return (
    <Layout>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">Cart Is Empty</div>
      ) : (
        <div className="cart-page">
          <div className="cart-item-container">
            {cartItems.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                increase={increase}
                decrease={decrease}
                remove={remove}
              />
            ))}
          </div>
          <Total itemCount={itemCount} total={total} clear={clear} />
        </div>
      )}
    </Layout>
  );
}

export default CartPage;
