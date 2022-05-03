import { useState } from "react";
import menu from "assets/hamburgerIcon.svg";
import cart from "assets/cartIcon.svg";
import logo from "assets/logo.svg";

import styles from "./styles.module.scss";
import Links from "./components/Links";
import { animated, useTransition } from "react-spring";

function NavBar() {
  const [open, setOpen] = useState(false);
  const transition = useTransition(open, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -100, opacity: 0 },
  });

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        {transition((style, item) => {
          return (
            item && (
              <animated.div style={style}>
                <Links onClose={handleToggle} />
              </animated.div>
            )
          );
        })}
      </div>
      <div className={styles.container}>
        <div>
          <img
            className={styles.button}
            src={menu}
            alt="menu"
            onClick={handleToggle}
          />
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
