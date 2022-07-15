import { useState } from "react";
import { animated, useTransition } from "react-spring";
import { useNavigate } from "react-router-dom";
import Links from "./components/Links";
import menu from "assets/hamburgerIcon.svg";
import cart from "assets/cartIcon.svg";
import logo from "assets/logoNegro.png";

import styles from "./styles.module.scss";

function NavBar() {
  const [open, setOpen] = useState(false);
  const transition = useTransition(open, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -100, opacity: 0 },
  });

  const navigate = useNavigate();
  const handleHome = () => {
    navigate(`/`);
  };

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

        <div>
          <img
            className={styles.logo}
            onClick={handleHome}
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
