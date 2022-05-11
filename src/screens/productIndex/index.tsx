import { Product } from "./constants";
import styles from "./styles.module.scss";

function ProductIndex() {
  return (
    <div className={styles.container}>
      {Product.map((info) => (
        <div className={styles.products}>
          <div className={styles.img}>
            <p>{info.title}</p>
            <img src={info.img} alt="producto Yerbero" />
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
