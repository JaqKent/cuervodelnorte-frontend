import { CartItem } from "context/Cart/constants";
import styles from "./styles.module.scss";

interface Props {
  item: CartItem;
  onDelete: (id: string) => void;
}
function PurchaseItem({ onDelete, item }: Props) {
  const handleDeleteItemFromList = () => {
    onDelete(item.id);
  };

  return (
    <li className={styles.container}>
      <div>
        <p className={styles.itemName}>
          <span>({item.quantity})</span>
          {item.name}
        </p>
      </div>
      <p className={styles.price}>${item.price * item.quantity}</p>
      <p className={styles.deleteButton} onClick={handleDeleteItemFromList}>
        x
      </p>
    </li>
  );
}

export default PurchaseItem;
