import styles from "./styles.module.scss";

interface Props {
  img: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function Item({ name, onClick, isSelected, img }: Props) {
  return (
    <div className={styles.products}>
      <div
        className={`${isSelected ? styles.selected : styles.section}`}
        onClick={onClick}
      >
        <div className={styles.title}>
          <p>{name}</p>
        </div>
        <img className={styles.img} src={img} alt={name} />
      </div>
    </div>
  );
}

export default Item;
