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
          <a
            target="_blank"
            href="https://www.facebook.com/Cuervo-del-Norte-102097179028369/"
            rel="noreferrer"
          >
            <Facebook width={45} height={45} fill="#fff" />
          </a>
          <p className={styles.links}>
            {" "}
            <a
              className={styles.links}
              target="_blank"
              href="https://www.facebook.com/Cuervo-del-Norte-102097179028369/"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
          <a href="http://www.instagram.com/cuervodelnorte.tuc">
            <Instagram width={45} height={45} fill="#fff" />
          </a>

          <p className={styles.links}>
            <a
              target="_blank"
              href="http://www.instagram.com/cuervodelnorte.tuc"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className={styles.cuervo}>
        <p>Cuervo del Norte 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
