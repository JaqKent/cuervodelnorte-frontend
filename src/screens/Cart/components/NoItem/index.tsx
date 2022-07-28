import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

function NoItem() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faTimesCircle} className={styles.icon} />
      <h1 className={styles.title}>¡No hay productos!</h1>
      <p className={styles.body}>
        Los productos que agregués en la tienda van a aparecer acá :)
      </p>
    </div>
  );
}

export default NoItem;
