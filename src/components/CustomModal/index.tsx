import styles from "./styles.module.scss";

interface Props {
  title: string;
  acceptButtonText: string;
  cancelButtonText: string;
  acceptButtonOnClick: () => void;
  cancelButtonOnClick: () => void;
  show: boolean;
}

function CustomModal({
  title,
  acceptButtonText,
  cancelButtonText,
  acceptButtonOnClick,
  cancelButtonOnClick,
  show,
}: Props) {
  return show ? (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>{title}</p>
        </div>
        <div className={styles.buttonSection}>
          <button className={styles.buttonOne} onClick={acceptButtonOnClick}>
            {acceptButtonText}
          </button>
          <button className={styles.buttonTwo} onClick={cancelButtonOnClick}>
            {cancelButtonText}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default CustomModal;
