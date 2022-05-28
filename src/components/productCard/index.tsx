import yerbero from "assets/productYerbero.png";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  image: string[];
  name: string;
  price: number;
  description?: string;
  _id?: string;
  stock: number;
}
function ProductCard({ image, name, price, description, _id, stock }: Props) {
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
