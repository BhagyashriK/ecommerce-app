import Axios from "axios";
import qs from "querystring";

import { API_ENDPOINT } from "../../../constants/constants";
import removeFalsy from "../../../utilities/remove-falsy";

export const getProductList = filter => {
  return Axios.get(
    `${API_ENDPOINT}/products?${qs.stringify(removeFalsy(filter))}`
  ).catch(error => Promise.reject(error.message));
};

export const getProductTypes = () => {
  return Axios.get(`${API_ENDPOINT}/types`).catch(error =>
    Promise.reject(error.message)
  );
};

export const getProductBrands = () => {
  return Axios.get(`${API_ENDPOINT}/brands`).catch(error =>
    Promise.reject(error.message)
  );
};
