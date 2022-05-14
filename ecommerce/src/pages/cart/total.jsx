import { useHistory } from 'react-router-dom';

import './cart-page.styles.scss';

function Total(props) {
  const history = useHistory();

  return (
    <div className="total-container">
      <div className="total">
        <p>Total Items: {props.itemCount}</p>
        <p>{`Total Amount: £${props.total}`}</p>
      </div>
      <div className="checkout">
        <button
          className="button is-black"
          onClick={() => {
            history.push('/checkout');
          }}
        >
          CHECKOUT
        </button>
        <button
          className="button is-white"
          id="btn-white-outline"
          onClick={() => {
            props.clear();
          }}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default Total;
