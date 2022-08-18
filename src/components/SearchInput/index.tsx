import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "context/Product";
import lupa from "assets/search.svg";

import styles from "./styles.module.scss";

function Searchinput() {
  const { allProducts } = useContext(ProductsContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSearch = (searchItem: string) => {
    navigate(`/product/${searchItem}`);
  };

  const filteredProducts = allProducts
    .filter((item) => {
      const searchItem = value.toLowerCase();
      const name = item.name.toLowerCase();
      return searchItem && name.includes(searchItem);
    })
    .slice(0, 5);
  return (
    <>
      <div className={styles.container}>
        <input
          value={value}
          className={styles.bar}
          type="text"
          placeholder="bolsos,mochilas..."
          onChange={onChange}
        />
        <button className={styles.button} onClick={() => onSearch(value)}>
          <img src={lupa} alt="lupa-buscar" />
        </button>
      </div>
      <div className={styles.dropdown}>
        {filteredProducts.map((item) => (
          <div
            onClick={() => onSearch(item._id || "")}
            className={styles.dropdownRow}
            key={item._id}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default Searchinput;
