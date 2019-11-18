import * as types from "./product-list.types";

export const initialState = {
  list: [],
  isLoading: true,
  errorMessage: null
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCTS.REQUEST:
      return Object.assign({}, state, { isLoading: true });
    case types.PRODUCTS.SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        list: action.payload,
        errorMessage: null
      });
    case types.PRODUCTS.FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}
