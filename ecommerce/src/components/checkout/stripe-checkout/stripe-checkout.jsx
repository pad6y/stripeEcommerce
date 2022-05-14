import { useState, useContext } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../../context/cart-context';
import { fetchFromAPI } from '../../../helpers';

function StripeCheckout() {
  const [email, setEmail] = useState('');
  const { cartItems } = useContext(CartContext);
  const stripe = useStripe();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const guessCheckoutHandler = async (event) => {
    event.preventDefault();

    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'GBP',
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl],
          },
        },
      };
    });

    const response = await fetchFromAPI('create-checkout-session', {
      body: { line_items, customer_email: email },
    });

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={guessCheckoutHandler}>
      <div>
        <input
          type="text"
          onChange={emailHandler}
          placeholder="Email"
          value={email}
          className="nomad-input"
        />
      </div>
      <div className="submit-btn">
        <button type="submit" className="button is-black nomad-btn submit">
          Checkout
        </button>
      </div>
    </form>
  );
}

export default StripeCheckout;
