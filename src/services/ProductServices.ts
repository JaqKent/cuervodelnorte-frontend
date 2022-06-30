import api from "config/api";
import {
  AllProductsResponse,
  Purchase,
  SingleProductsResponse,
} from "./constant";

const PRODUCTS_PATH = "/products";
const PURCHASE_PATH = "/sells";

export const getAllProducts = () =>
  api.get<AllProductsResponse>(`${PRODUCTS_PATH}/get`);

export const getProduct = (productId: string) =>
  api.get<SingleProductsResponse>(`${PRODUCTS_PATH}/getSingle/${productId}`);

export const makePurchase = (info: Purchase) =>
  api.post(`${PURCHASE_PATH}/create`, info);
