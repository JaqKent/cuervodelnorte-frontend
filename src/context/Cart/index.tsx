/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useState, useContext } from "react";
import { notify } from "react-notify-toast";

import { Product } from "interface/Products";

import { Info } from "interface/Purchase";
import {
  GoogleAnalyticsEvents,
  GACartActions,
  GAGlobalActions,
} from "interface/GoogleAnalytics";
import useGATracking from "Hooks/useGATracking";
import { makePurchase } from "services/ProductServices";

import { ProductsContext } from "context/Product";
import Spinner from "components/Spinner";

import {
  buildProductOutput,
  buildPurchaseOutput,
  checkItemStock,
  checkStock,
  removeProduct,
} from "./utils";
import { CartItem } from "./constants";

interface ContextProps {
  productList: CartItem[];
  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  checkout: (info: Info) => void;
}

export const CartContext = createContext<ContextProps>({
  productList: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},

  checkout: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [loadingText, setLoadingText] = useState("");
  const [productList, setProductList] = useState<CartItem[]>([]);

  const { gatherProducts } = useContext(ProductsContext);
  const trackGA = useGATracking(GoogleAnalyticsEvents.Cart);

  const addProductToCart = (product: Product, quantity: number) => {
    if (checkItemStock(product)) {
      try {
        const PRODUCTS = buildProductOutput(productList, product, quantity);
        setProductList(PRODUCTS);
        trackGA(
          GACartActions.AddedProduct,
          `${product.name}, cantidad: ${quantity}`
        );
      } catch (err) {
        trackGA(GAGlobalActions.Issue);
        notify.show("Ultimo Product en Stock", "warning");
      }
    } else {
      trackGA(GAGlobalActions.Issue);
      notify.show("Sin Stock", "warning");
    }
  };

  const removeProductFromCart = (productId: string) => {
    const newProductList = removeProduct(productList, productId);
    trackGA(GACartActions.RemovedItemFromCart);
    setProductList(newProductList);
  };

  const checkout = (info: Info) => {
    setLoadingText("Realizando Compra");
    if (checkStock(productList)) {
      const purchase = buildPurchaseOutput(info, productList);
      makePurchase(purchase)
        .then((response) => {
          trackGA(
            GACartActions.Bought,
            `Cant. items: ${purchase.products.length}, Monto: $${purchase.amount}`
          );
          gatherProducts();
          if (response.ok) {
            notify.show("Exito", "success");
            setLoadingText("");
            setProductList([]);
            window.location.href = process.env.REACT_APP_WHATSAPP || "";
          } else {
            trackGA(GAGlobalActions.Issue);
            setLoadingText("");
            notify.show("error", "error");
          }
        })
        .catch(() => {
          trackGA(GAGlobalActions.Issue);
          setLoadingText("");
          notify.show("error", "error");
        });
    } else {
      trackGA(GAGlobalActions.Issue);
      setLoadingText("");
      notify.show("Sin Stock", "warning");
    }
  };

  const value = {
    productList,
    addProductToCart,
    removeProductFromCart,
    checkout,
  };

  return (
    <CartContext.Provider value={value}>
      {!!loadingText && <Spinner loadingText={loadingText} />}
      {children}
    </CartContext.Provider>
  );
}
