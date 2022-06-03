/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useState, useContext } from "react";
import { notify } from "react-notify-toast";
import { useNavigate } from "react-router-dom";

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

import {
  buildProductOutput,
  buildPurchaseOutput,
  checkItemStock,
  checkStock,
  removeProduct,
} from "./utils";
import { CartItem } from "./constants";
import LoadingSpinner from "components/loadingSpinner";

interface ContextProps {
  productList: CartItem[];
  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  showModal: boolean;
  removeModal: () => void;
  checkout: (info: Info) => void;
}

export const CartContext = createContext<ContextProps>({
  productList: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  showModal: false,
  removeModal: () => {},
  checkout: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [loadingText, setLoadingText] = useState("");
  const [productList, setProductList] = useState<CartItem[]>([]);
  const [showModal, removeModal] = useState(false);
  const history = useNavigate();
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
        removeModal(true);
      } catch (err) {
        removeModal(false);
        trackGA(GAGlobalActions.Issue);
        notify.show("Agregar al Carrito", "warning");
      }
    } else {
      removeModal(false);
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
            history("/thank-you");
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
    showModal,
    removeModal: () => removeModal(false),
    checkout,
  };

  return (
    <CartContext.Provider value={value}>
      {!!loadingText && <LoadingSpinner loadingText={loadingText} />}
      {children}
    </CartContext.Provider>
  );
}
