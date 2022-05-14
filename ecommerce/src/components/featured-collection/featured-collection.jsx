import { useContext } from 'react';
import { ProductsContext } from '../../context/product-context';
import FeaturedProduct from '../shared/featured-product';

function FeaturedCollection() {
  const { products } = useContext(ProductsContext);

  const productItems = products.filter((product, i) => i < 4);

  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">Featured Collections</h2>
      <div className="products">
        {productItems.map((item) => (
          <FeaturedProduct product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCollection;
