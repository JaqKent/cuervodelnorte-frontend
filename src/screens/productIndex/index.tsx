import { Product } from "./constants";
import styles from "./styles.module.scss";

function ProductIndex() {
  return (
    <div className={styles.container}>
      {Product.map((info) => (
        <div className={styles.products}>
          <div
            className={styles.section}
            onClick={() => console.log("product")}
          >
            <div className={styles.title}>
              <p>{info.title}</p>
            </div>
            <img className={styles.img} src={info.img} alt="producto Yerbero" />
          </div>
          <div className={styles.text}>
            <p>{info.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductIndex;
