import { ReactComponent as Facebook } from "assets/facebook.svg";
import { ReactComponent as Instagram } from "assets/instagram.svg";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.sectionUp}>
        <div className={styles.follow}>
          <h3>¡SEGUINOS EN LAS REDES!</h3>
        </div>
        <div className={styles.logo}>
          <Facebook
            width={45}
            height={45}
            fill="#fff"
            onClick={() => console.log("facebook")}
          />
          <p>Facebook</p>
          <Instagram
            width={45}
            height={45}
            fill="#fff"
            onClick={() => console.log("Instagram")}
          />
          <p>Instagram</p>
        </div>
      </div>
      <div className={styles.cuervo}>
        <p>Cuervo del Norte 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
