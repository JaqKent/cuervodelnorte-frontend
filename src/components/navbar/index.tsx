import { useState } from "react";
import NavItem from "./NavItem";
import menu from "assets/Hamburger Icon.svg";
import cart from "assets/Cart Icon.svg";
import arrow from "assets/arrow-left.svg";
import logo from "assets/logo.svg";

import styles from "./styles.module.scss";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.container}>
      <div className={`${open ? styles.links : ""}`}>
        <div className={styles.button} onClick={handleToggle}>
          {open ? (
            <div className={styles.arrow}>
              <img src={arrow} alt="volver" /> <p>Navegacion</p>
            </div>
          ) : (
            <img src={menu} alt="menu" />
          )}
        </div>
        <div className={`${open ? styles.open : styles.close}`}>
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
      <div>
        <img
          className={styles.logo}
          onClick={() => console.log("home")}
          src={logo}
          alt="logo-cuervo-del-norte"
        />
      </div>
      <div>
        <img
          className={styles.cart}
          onClick={() => console.log("carrito")}
          src={cart}
          alt="Carrito"
        />
      </div>
    </div>
  );
}

export default NavBar;
