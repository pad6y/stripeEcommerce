import { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { ProductsContext } from '../../context/product-context';
import { CartContext } from '../../context/cart-context';
import { isInCart } from '../../helpers';
import Layout from '../../components/shared/layout';

import './single-product-page.styles.scss';

function SingleProductPage(props) {
  const productId = useParams().productId;
  const history = useHistory();
  const { products } = useContext(ProductsContext);
  const { cartItems, addProduct, increase } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const prod = products.find((item) => Number(item.id) === Number(productId));

    if (!prod) {
      return history.push('/shop');
    }

    setProduct(prod);
  }, [products, productId, history]);

  //while loading can replace with a spinner
  if (!product) {
    return null;
  }

  const inCart = isInCart(product, cartItems);

  const addHandler = () => {
    addProduct(product);
  };

  const increaseQtyHandler = () => {
    increase(product);
  };

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={product.imageUrl} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{product.title}</h3>
            <p>£ {product.price}</p>
          </div>
          <div className="add-to-cart-btns">
            {!inCart && (
              <button
                className="button is-black nomad-btn"
                onClick={addHandler}
              >
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
            <button
              className={`button ${inCart ? 'is-black' : 'is-white'} nomad-btn`}
              id={inCart && 'btn-white-outline'}
              onClick={() => {}}
            >
              CHECKOUT
            </button>
          </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleProductPage;
