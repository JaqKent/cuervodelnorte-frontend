import styles from "./styles.module.scss";
import bigLogo from "assets/cuervoLogo.svg";
import tuc from "assets/tucuman.svg";

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <img src={bigLogo} alt="logo-cuervo-del-norte" />
      </div>
      <div className={styles.coments}>
        <div className={styles.img}>
          <img src={tuc} alt="Provincia-tucuman" />
          <div className={styles.text}>
            <h4>
              Hecho 100% en Tucumán<p> en el corazon de la república</p>
            </h4>
          </div>
        </div>
        <div className={styles.img}>
          <img src={tuc} alt="Provincia-tucuman" />
          <div className={styles.text}>
            <h4>
              talking point 2<p> un poco de texto</p>
            </h4>
          </div>
        </div>
        <div className={styles.img}>
          <img src={tuc} alt="Provincia-tucuman" />
          <div className={styles.text}>
            <h4>
              talking point 3
              <p>
                mas texto con mas lineas para probar como se ve y como hace el
                break
              </p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
