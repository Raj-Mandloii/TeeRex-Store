import * as types from "./actionTypes.js";
export const initialState = {
  total: 0,
  products: [],
 
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        products: payload.products,
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        products: payload.products,
      };
    case types.UPDATE_PRICE:
      return {
        ...state,
        total: payload.total,
      };
    case types.UPDATE_QUANTITY:
      return {
        ...state,
        products: payload.products,
      };

    default:
      return state;
  }
};

export default reducer;
