import CartActionTypes from './cartTypes';
import { addCartItemToCart } from './cartUtils';

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case CartActionTypes.ADD_ITEM:
      return { ...state, cartItems: addCartItemToCart(state.cartItems, action.payload) };

    default:
      return state;
  }
};

export default cartReducer;
