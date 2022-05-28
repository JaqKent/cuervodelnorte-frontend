import ProductCard from "components/productCard";
import { ReactComponent as Arrow } from "assets/arrowLeft.svg";
import styles from "./styles.module.scss";

function ProductCategory() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <Arrow
          width={15}
          height={15}
          fill="#fff"
          onClick={() => console.log("back")}
        />
        <h3>Nombre de la Categoria</h3>
        <p>(23 productos)</p>
      </div>
      <div className={styles.card}>456</div>
    </div>
  );
}

export default ProductCategory;
