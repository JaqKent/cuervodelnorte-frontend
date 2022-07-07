import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "components/Carrousel";
import { Product } from "interface/Products";
import { CartContext } from "context/Cart";

import { ReactComponent as Arrow } from "assets/arrowLeft.svg";
import styles from "./styles.module.scss";
import paths from "App/paths";

interface Props {
  product: Product;
}

function ProductPage({ product }: Props) {
  const navigate = useNavigate();
  const { addProductToCart, removeModal, ShowModal } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addProductToCart(product, quantity);
  };

  const handleGoToCart = () => {
    navigate(paths.cart);
    removeModal();
  };

  const handlegoToStore = () => {
    navigate(paths.store);
    removeModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Arrow
          className={styles.arrow}
          width={15}
          height={15}
          fill="#fff"
          onClick={() => console.log("back")}
        />
        <h4>{product.name}</h4> <p>{product.price}</p>
      </div>

      <Carousel slides={product.image} />

      <div className={styles.line}></div>
      <div className={styles.text}>
        <div className={styles.textUp}>
          <h3>{product.name}</h3> <p>{product.price}</p>
        </div>
        <div className={styles.textDown}>
          <p>{product.description}</p>
        </div>
      </div>
      <div className={styles.line}></div>

      <button className={styles.button} onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductPage;
