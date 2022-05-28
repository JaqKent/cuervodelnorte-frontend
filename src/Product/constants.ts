import { Product } from "interface/Products";

export const DEFAULT_PRODUCT: Product = {
  price: 0,
  stock: 0,
  category: 0,
  _id: "",
  name: "",
  image: [""],
  description: "",
  discount: 0,
  createdAt: "",
  updatedAt: "",
};

export enum SortingType {
  All,
  Wallets,
  Purses,
  Backpacks,
  Bags,
  Accesories,
}

export const SORTING_LABELS = [
  "All",
  "Wallets",
  "Purses",
  "Backpacks",
  "Bags",
  "Accesories",
];
