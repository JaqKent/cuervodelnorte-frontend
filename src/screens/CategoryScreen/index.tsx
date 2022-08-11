import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductsContext } from "context/Product";
import ProductCard from "components/ProductCard";
import LoadingSpinner from "components/LoadingSpinner";

import { ReactComponent as Arrow } from "assets/arrowLeft.svg";
import styles from "./styles.module.scss";
import NoProductScreen from "./components/NoProductsScreen";
import { categoryId } from "./utils";

function CategoryScreen() {
  const {
    handleSortProducts: sortProducts,
    isLoading,
    products,
  } = useContext(ProductsContext);
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const handleBack = () => {
    navigate(`/`);
  };

  const categoryStock = products.length;

  useEffect(() => {
    sortProducts(Number(id));
  }, [id]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingSpinner loadingText="Cargando" />
      ) : (
        <>
          <div className={styles.bar}>
            <div className={styles.arrow}>
              <Arrow width={15} height={15} fill="#fff" onClick={handleBack} />
            </div>
            <h3>{categoryId(id)}</h3>
            <p>
              ({categoryStock ? categoryStock : "Sin"}
              {categoryStock === 1 ? " Producto" : " productos"})
            </p>
          </div>
          {products?.length ? (
            <div className={styles.card}>
              {products.map((product) => (
                <ProductCard {...product} key={product._id} />
              ))}
            </div>
          ) : (
            <NoProductScreen />
          )}
        </>
      )}
    </div>
  );
}

export default CategoryScreen;
