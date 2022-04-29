import NavItem from "../NavItem";
import arrow from "assets/arrowLeft.svg";

import styles from "./styles.module.scss";

interface Props {
  onClose: () => void;
}

function Links({ onClose }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.arrow}>
          <img src={arrow} alt="volver" onClick={onClose} /> <p>Navegacion</p>
        </div>
        <div className={styles.about}>
          <div>
            <NavItem onClick={() => console.log("test1")} label={"item1"} />
            <NavItem onClick={() => console.log("test2")} label={"item2"} />
            <NavItem onClick={() => console.log("test3")} label={"item3"} />
            <NavItem onClick={() => console.log("test4")} label={"item4"} />
          </div>
          <div>
            <NavItem onClick={() => console.log("about")} label={"about"} />
            <NavItem onClick={() => console.log("help")} label={"help"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
