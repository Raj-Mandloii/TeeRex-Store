import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Product from "../Components/Product";
import SingleProduct from "../Components/SingleProduct";
import styles from "../Styles/productlisting.module.css";

const ProductListing = () => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then((res) => res.json())
      .then((res) => setData(res));
      console.log("calling")
  };

  useEffect(() => {
    data.length === 0 && getAllData();
  }, []);
  return (
    <div className={styles.list}>
      <Filter />
      <Product data={data} />
      {/* <SingleProduct data={data}/> */}
    </div>
  );
};

export default ProductListing;
