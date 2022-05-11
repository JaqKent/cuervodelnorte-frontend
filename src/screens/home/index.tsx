import styles from "./styles.module.scss";
import bigLogo from "assets/cuervoLogo.svg";
import { COMMENT } from "./constants";

function Home() {
  return (
    <main className={styles.container}>
      <div>
        <img src={bigLogo} alt="logo-cuervo-del-norte" />
      </div>
      <div className={styles.coments}>
        {COMMENT.map((data) => (
          <div className={styles.img}>
            <img src={data.imagen} alt="tucuman" />
            <div className={styles.text}>
              <h4>
                {data.text1}
                <p> {data.text2}</p>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
