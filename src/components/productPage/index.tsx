import { ReactComponent as Arrow } from "assets/arrowLeft.svg";
import Carousel from "components/carousel";
import { products } from "./constants";
import styles from "./styles.module.scss";

function ProductPage() {
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
        <h4>Cartera industrial</h4> <p> $18.999</p>
      </div>

      <Carousel slides={products} />

      <div className={styles.line}></div>
      <div className={styles.text}>
        <div className={styles.textUp}>
          <h3>Cartera industrial</h3> <p>$18.999</p>
        </div>
        <div className={styles.textDown}>
          <p>
            Color rojo, con broche y correa para el perro, te lava la ropa y
            ademas te prepara la comida. Indispensable para cambiarle las ruedas
            al auto y ultra necesario para hacer las compras en la farmacia de
            cacho. <br /> Mándale un saludo a la marta y decile que para cuando
            los tamales que me viene prometiendo
          </p>
        </div>
      </div>
      <div className={styles.line}></div>

      <button className={styles.button} onClick={() => console.log("add")}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductPage;
