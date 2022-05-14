import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../../components/shared/layout';
// import StripeCheckout from './stripe-checkout/stripe-checkout';
import ShippingAddress from './custom-checkout/shipping-address';
import CustomCheckout from './custom-checkout/custom-checkout';
import './checkout.style.scss';

function Checkout() {
  const { cartItems, itemCount, total } = useContext(CartContext);
  const [shipping, setShipping] = useState(null);

  const addressShown = {
    display: shipping ? 'none' : 'block',
  };

  const cardShown = {
    display: shipping ? 'block' : 'none',
  };

  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h4>{`Amount Due: £${total}`}</h4>
        {/* <StripeCheckout /> */}
        <div style={addressShown}>
          <ShippingAddress setShipping={setShipping} />
        </div>
        <div style={cardShown}>
          <CustomCheckout cartItems={cartItems} shipping={shipping} />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
