export const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    ),
    total: cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      const newState = {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

      localStorage.setItem('cartItems', JSON.stringify(newState));
      return newState;

    case 'INCREASE':
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity++;

      const newIncreaseState = {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

      localStorage.setItem('cartItems', JSON.stringify(newIncreaseState));
      return newIncreaseState;

    case 'DECREASE':
      const decreaseItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const product = state.cartItems[decreaseItemIndex];
      if (product.quantity > 1) {
        product.quantity--;
      }

      const newDecreaseState = {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

      localStorage.setItem('cartItems', JSON.stringify(newDecreaseState));
      return newDecreaseState;

    case 'REMOVE':
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      const newRemoveState = {
        ...state,
        cartItems: [...newCartItems],
        ...sumItems(newCartItems),
      };

      localStorage.setItem('cartItems', JSON.stringify(newRemoveState));
      return newRemoveState;

    case 'CLEAR':
      localStorage.removeItem('cartItems');

      return {
        cartItems: [],
        itemCount: 0,
        total: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
