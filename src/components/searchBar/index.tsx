import { ProductsContext } from "context/Product";
import { useContext, useState } from "react";
import styles from "./styles.module.scss";

function SearchBar() {
  const { products } = useContext(ProductsContext);
  const [value, setValue] = useState("");

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  const onSearch = (searchItem: string) => {
    console.log("search", searchItem);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.bar}
          type="text"
          placeholder="bolsos,mochilas..."
          onChange={onChange}
        />
        <button className={styles.button} onClick={() => onSearch(value)}>
          o
        </button>
      </div>
      <div className={styles.dropdown}>
        {products
          .filter((item) => {
            const searchItem = value.toLowerCase();
            const name = item.name.toLowerCase();
            return (
              searchItem && name.startsWith(searchItem) && name !== searchItem
            );
          })
          .slice(0.5)
          .map((item) => (
            <div
              onClick={() => onSearch(item.name)}
              className={styles.dropdownRow}
              key={item._id}
            >
              {" "}
              {item.name}
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchBar;
