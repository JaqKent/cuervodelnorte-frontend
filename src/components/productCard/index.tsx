import { useNavigate } from "react-router-dom";
import { notify } from "react-notify-toast";

import styles from "./styles.module.scss";
import { Product } from "interface/Products";

function ProductCard({ image, name, price, description, _id, stock }: Product) {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${_id}`);
  };
  const handleNoStock = () => notify.show("Sin Stock", "warning");
  return (
    <div
      className={`${styles.stock} ${styles.glow} ${
        stock <= 0 ? styles.noStock : ""
      }`}
      onClick={stock <= 0 ? handleNoStock : handleViewProduct}
      role="contentinfo"
    >
      <div className={styles.container}>
        <img
          className={styles.img}
          src={image[0]}
          alt="imagen producto"
          onClick={handleViewProduct}
        />
        <div className={styles.text}>
          <h4>{name}</h4>
          <p>{description}</p>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
