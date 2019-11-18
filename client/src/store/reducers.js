/**
 * import all reducers here and passed to combineReducers for store configuration
 */
import { combineReducers } from "redux";
import { productsReducer } from "../views/routes/product-list/product-list.reducer";

export default combineReducers({
  products: productsReducer
});
