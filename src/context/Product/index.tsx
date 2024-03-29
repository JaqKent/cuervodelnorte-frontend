/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { notify } from "react-notify-toast";

import { Product } from "interface/Products";
import Spinner from "components/Spinner";

import { getAllProducts, getProduct } from "services/ProductServices";

import { DEFAULT_PRODUCT, SortingType } from "./constants";
import { sortProducts } from "./utils";

interface ContextProps {
  products: Product[];
  allProducts: Product[];
  singleProduct: Product;
  isLoading: boolean;
  gatherProducts: () => void;
  gatherSingleProduct: (id: string) => void;
  refreshItem: (id: string) => void;
  handleSortProducts: (sortingType: number) => void;
}

export const ProductsContext = createContext<ContextProps>({
  products: [],
  allProducts: [],
  singleProduct: DEFAULT_PRODUCT,
  isLoading: true,
  gatherProducts: () => {},
  gatherSingleProduct: () => {},
  refreshItem: () => {},
  handleSortProducts: () => {},
});

export default function ProductsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loadingText, setLoadingText] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product>(DEFAULT_PRODUCT);

  const handleSortProducts = useCallback(
    (sortingType: number) => {
      if (allProducts.length) {
        setProducts([
          ...sortProducts(allProducts, sortingType),
          DEFAULT_PRODUCT,
        ]);
        setProducts((prevState) =>
          prevState.filter((item) => item !== DEFAULT_PRODUCT)
        );
      }
    },
    [allProducts]
  );

  const gatherProducts = useCallback(() => {
    setLoadingText("Obteniendo productos");
    getAllProducts()
      .then(({ data }) => {
        if (data) {
          setAllProducts(sortProducts(data.response, SortingType.All));
          setAllProducts(data.response);

          setLoadingText("");
        } else {
          notify.show(
            "Ocurrió un error trayendo los datos, por favor refresque la página",
            "error"
          );
          setLoadingText("");
        }
      })
      .catch(() => {
        notify.show("Ocurrió un error trayendo los datos", "error");
        setLoadingText("");
      });
  }, []);

  const fetchSingleProduct = useCallback((id: string) => {
    getProduct(id)
      .then(({ data }) => {
        if (data) {
          setSingleProduct(data.response);
        } else {
          notify.show(
            "Ocurrió un error trayendo los datos, por favor refresque la página",
            "error"
          );
        }
      })
      .catch(() => {
        notify.show("Ocurrió un error trayendo los datos", "error");
      });
  }, []);

  const gatherSingleProduct = useCallback(
    (id: string) => {
      setLoadingText("Obteniendo producto");

      if (products.length > 0) {
        setLoadingText("");
        return setSingleProduct(
          products.find((product) => product._id === id) || DEFAULT_PRODUCT
        );
      }
      setLoadingText("");
      return fetchSingleProduct(id);
    },
    [fetchSingleProduct, products]
  );

  useEffect(() => {
    gatherProducts();
  }, [gatherProducts]);

  const value = {
    products,
    allProducts,
    singleProduct,
    isLoading: !!loadingText,
    gatherProducts,
    gatherSingleProduct,
    refreshItem: fetchSingleProduct,
    handleSortProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {loadingText ? <Spinner /> : children}
    </ProductsContext.Provider>
  );
}
