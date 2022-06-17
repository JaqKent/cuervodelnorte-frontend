import ProductCard from "components/productCard";
import { ReactComponent as Arrow } from "assets/arrowLeft.svg";
import styles from "./styles.module.scss";

import { useContext, useState } from "react";
import { Product } from "interface/Products";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "context/Product";
import LoadingSpinner from "components/loadingSpinner";

function ProductCategory() {
  const { isLoading, products } = useContext(ProductsContext);
  const [productsList] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/`);
  };
  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingSpinner loadingText="Cargando" />
      ) : (
        <>
          <div className={styles.bar}>
            <Arrow width={15} height={15} fill="#fff" onClick={handleBack} />
            <h3>Nombre de la Categoria</h3>
            <p>(23 productos)</p>
          </div>
          {products?.length ? (
            <div className={styles.card}>
              {productsList.map((product) => (
                <ProductCard {...product} key={product._id} />
              ))}
            </div>
          ) : (
            <div className={styles.noItems}>
              <h1 className={styles.noItemsTitle}>
                No hay productos para mostrar
              </h1>
              <p className={styles.noItemsText}>
                Por favor. Cambiá la categoría, recarga la página o volvé en
                otro momento :)
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProductCategory;
