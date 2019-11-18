import Axios from "axios";
import qs from "querystring";

import { API_ENDPOINT } from "../../../constants/constants";

export const getProductList = (filter?: any) => {
  return Axios.get(
    `${API_ENDPOINT}/products?${qs.stringify(filter)}`
  ).catch(error => Promise.reject(error.message));
};
