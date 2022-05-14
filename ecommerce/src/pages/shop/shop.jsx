import { useContext } from 'react';

import Layout from '../../components/shared/layout';
import FeaturedProduct from '../../components/shared/featured-product';
import { ProductsContext } from '../../context/product-context';

import './shop.styles.scss';

function Shop() {
  const { products } = useContext(ProductsContext);
  const productsContent = products.map((item) => (
    <FeaturedProduct product={item} key={item.id} />
  ));

  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{productsContent}</div>
      </div>
    </Layout>
  );
}

export default Shop;
