import React from "react";

import styles from "./styles.module.scss";

function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        className={styles.bar}
        type="text"
        placeholder="bolsos,mochilas..."
      />
    </div>
  );
}

export default SearchBar;
