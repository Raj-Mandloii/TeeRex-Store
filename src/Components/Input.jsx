import React from "react";
import styles from "../Styles/productlisting.module.css";
const Input = ({seach, setSearch}) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        placeholder="Search for products..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.searchIcon}>
        <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" />
      </div>
    </div>
  );
};

export default Input;
