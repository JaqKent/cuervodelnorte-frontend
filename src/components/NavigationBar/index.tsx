import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useTransition } from "react-spring";

import Links from "./components/Links";
import { CartContext } from "context/Cart";

import menu from "assets/hamburgerIcon.svg";
import cart from "assets/cartIcon.svg";
import logo from "assets/logoNegro.png";

import { ANIMATION_CONFIG } from "./constants";
import styles from "./styles.module.scss";

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const transition = useTransition(open, ANIMATION_CONFIG);
  const { productList } = useContext(CartContext);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/`);
  };

  const handleCart = () => {
    navigate(`/Cart`);
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
          <div onClick={handleCart}>
            {productList.length ? (
              <p className={styles.cartNumber}>{productList.length}</p>
            ) : (
              <></>
            )}
          </div>
          <img className={styles.cart} src={cart} alt="Carrito" />
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
