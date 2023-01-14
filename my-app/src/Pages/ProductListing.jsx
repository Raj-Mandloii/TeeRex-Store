import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Product from "../Components/Product";

import styles from "../Styles/productlisting.module.css";

const ProductListing = () => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
    console.log("calling");
  };

  useEffect(() => {
    data.length === 0 && getAllData();
  }, []);
  return (
    <>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Search for products..."
        />
        <div className={styles.searchIcon}>
          <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" />
        </div>
      </div>
      <div className={styles.list}>
        <Filter />
        <Product data={data} />
      </div>
    </>
  );
};

export default ProductListing;
