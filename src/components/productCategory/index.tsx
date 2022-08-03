import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductsContext } from "context/Product";
import ProductCard from "components/ProductCard";
import LoadingSpinner from "components/LoadingSpinner";

import { ReactComponent as Arrow } from "assets/arrowLeft.svg";
import styles from "./styles.module.scss";

function ProductCategory() {
  const { isLoading, products } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/`);
  };
  const categoryStock = products.length;

  const { id } = useParams<string>();

  const categoryId = (id: string | undefined) => {
    switch (id) {
      case "2":
        return "Carteras";

      case "3":
        return "Mochilas";

      case "4":
        return "Bolsos";
      case "5":
        return "Accesorios";

      default:
        return "";
    }
  };

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
