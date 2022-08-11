import styles from './styles.module.scss';

function NoProductScreen() {
  return (
    <div className={styles.noItems}>
      <h1 className={styles.noItemsTitle}>No hay productos para mostrar</h1>
      <p className={styles.noItemsText}>
        Por favor. Cambiá la categoría, recarga la página o volvé en otro
        momento :)
      </p>
    </div>
  );
}
export default NoProductScreen;
