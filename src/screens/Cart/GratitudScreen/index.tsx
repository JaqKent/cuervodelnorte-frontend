import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

function GratitudScreen() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>¡¡¡Gracias por tu compra!!!</h1>
      </div>
      <div>
        <button className={styles.button} onClick={handleBack}>
          Volver a la Tienda
        </button>
      </div>
    </div>
  );
}

export default GratitudScreen;
