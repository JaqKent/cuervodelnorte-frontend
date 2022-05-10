import { ReactComponent as Facebook } from "assets/facebook.svg";
import { ReactComponent as Instagram } from "assets/instagram.svg";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
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
        <Instagram
          width={45}
          height={45}
          fill="#fff"
          onClick={() => console.log("Instagram")}
        />
      </div>
      <div className={styles.cuervo}>
        <p>Cuervo del Norte 2022</p>
      </div>
    </div>
  );
}

export default Footer;
