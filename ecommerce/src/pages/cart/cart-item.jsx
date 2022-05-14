import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from '../../components/icons/index';
import './cart-page.styles.scss';

function CartItems(props) {
  const { title, imageUrl, price, quantity } = props.item;

  const increaseHandler = () => {
    props.increase(props.item);
  };

  const decreaseHandler = () => {
    props.decrease(props.item);
  };

  const removeHandler = () => {
    props.remove(props.item);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>£ {price}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={increaseHandler}>
          <PlusCircleIcon width="20px" />
        </button>
        {quantity === 1 && (
          <button className="btn-trash" onClick={removeHandler}>
            <TrashIcon width="20px" />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-decrease" onClick={decreaseHandler}>
            <MinusCircleIcon width="20px" />
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItems;
