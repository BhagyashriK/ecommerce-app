import { createApiAction } from "../../../utilities/action";
import { PRODUCTS, TYPES, BRANDS } from "./product-list.types";
import {
  getProductList,
  getProductTypes,
  getProductBrands
} from "./product-list.api";

export const getProducts = createApiAction(PRODUCTS, getProductList);

export const getTypes = createApiAction(TYPES, getProductTypes);

export const getBrands = createApiAction(BRANDS, getProductBrands);
