import { useContext } from "react";
import { CartContext } from "context/Cart";
import { CartItem } from "context/Cart/constants";
import PurchaseItem from "./components/PurchaseItem";

import styles from "./styles.module.scss";

interface Props {
  items: CartItem[];
  className?: string;
}

function PurchaseList({ items, className }: Props) {
  const { removeProductFromCart } = useContext(CartContext);
  const handleDeleteItemFromList = (id: string) => {
    removeProductFromCart(id);
  };

  const calculateTotal = () =>
    items.reduce((current, total) => total.price * total.quantity + current, 0);

  return (
    <div className={`${className}`}>
      {items.map((item) => (
        <PurchaseItem
          key={item.id}
          item={item}
          onDelete={handleDeleteItemFromList}
        />
      ))}
      <hr className={styles.separator} />
      <div className={styles.totalContainer}>
        <p className={styles.totalText}>Total</p>
        <p className={styles.price}>$ {calculateTotal()}</p>
      </div>
    </div>
  );
}

export default PurchaseList;
