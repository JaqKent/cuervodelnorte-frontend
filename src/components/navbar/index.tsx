import { useState } from "react";
import menu from "assets/hamburgerIcon.svg";
import cart from "assets/cartIcon.svg";
import logo from "assets/logo.svg";

import styles from "./styles.module.scss";
import Links from "./components/Links";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? <Links onClose={handleToggle} /> : null}
      <div className={styles.container}>
        <div className={`${open ? styles.links : ""}`}>
          <div>
            <img
              className={styles.button}
              src={menu}
              alt="menu"
              onClick={handleToggle}
            />
          </div>
        </div>
        <div className={styles.logo}>
          <img
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
    </>
  );
}

export default NavBar;
