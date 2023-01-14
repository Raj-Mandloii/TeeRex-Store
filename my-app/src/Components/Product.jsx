import React from "react";
import SingleProduct from "./SingleProduct";
import styles from "../Styles/product.module.css";

const Product = ({ data }) => {
  return (
    <div className={styles.product}>
      {data.map((item) => (
        <SingleProduct key={item.id} singledata={item} />
      ))}
    </div>
  );
};

export default Product;
