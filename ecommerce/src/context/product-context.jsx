import { createContext, useState } from 'react';
import SHOP_DATA from '../shop/index.js';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState(SHOP_DATA);
  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
