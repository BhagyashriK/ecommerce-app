import { createApiAction } from "../../../utilities/action";
import { PRODUCTS } from "./product-list.types";
import { getProductList } from "./product-list.api";

export const getProducts = createApiAction(PRODUCTS, getProductList);
