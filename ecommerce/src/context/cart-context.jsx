import React, { createContext, useReducer } from 'react';
import cartReducer from './cart-reducer';

export const CartContext = createContext();

let initialState = { cartItems: [], itemCount: 0, total: 0 };
const storeCart = localStorage.getItem('cartItems');

if (storeCart) {
  initialState = JSON.parse(storeCart);
  // console.log(initialState);
}

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addProduct = (product) =>
    dispatch({ type: 'ADD_ITEM', payload: product });
  const increase = (product) =>
    dispatch({ type: 'INCREASE', payload: product });
  const decrease = (product) =>
    dispatch({ type: 'DECREASE', payload: product });
  const remove = (product) => dispatch({ type: 'REMOVE', payload: product });
  const clear = () => dispatch({ type: 'CLEAR' });

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    remove,
    clear,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
