import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { isInCart } from '../../helpers';
import { Link } from 'react-router-dom';
import './featured-product.styles.scss';

function FeaturedProduct(props) {
  const { id, title, imageUrl, price } = props.product;
  const { addProduct, increase, cartItems } = useContext(CartContext);

  const inCart = isInCart(props.product, cartItems);

  const addHandler = () => {
    addProduct(props.product);
  };

  const increaseQtyHandler = () => {
    increase(props.product);
  };

  return (
    <div className="featured-product">
      <Link to={`/product/${id}`}>
        <div className="featured-image">
          <img src={imageUrl} alt="product" />
        </div>
      </Link>
      <div className="name-price">
        <h3>{title}</h3>
        <p>£ {price}</p>
        {!inCart && (
          <button className="button is-black nomad-btn" onClick={addHandler}>
            ADD TO CART
          </button>
        )}
        {inCart && (
          <button
            className="button is-white nomad-btn"
            id="btn-white-outline"
            onClick={increaseQtyHandler}
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
}

export default FeaturedProduct;
