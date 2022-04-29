import styles from "./styles.module.scss";

interface Props {
  label?: string;
  onClick: () => void;
  isActive?: boolean;
}
function NavItem({ onClick, label, isActive }: Props) {
  const activation = () => {
    if (isActive) {
      return;
    }
    onClick();
  };
  return (
    <div className={styles.line} title="item" onClick={activation} role="alert">
      {label && (
        <p className={`${isActive ? styles.active : ""}${styles.label}`}>
          {label}
        </p>
      )}
    </div>
  );
}

export default NavItem;
