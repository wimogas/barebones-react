import {
  ADD_TO_CART,
  GET_CART,
  DELETE_CART,
} from '../actions/cart.actions';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, payload.newItem],
      };
    case GET_CART:
      return {
        ...state,
        items: payload,
      };
    case DELETE_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}