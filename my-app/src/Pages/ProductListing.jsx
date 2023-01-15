import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Input from "../Components/Input";
import Product from "../Components/Product";
import styles from "../Styles/productlisting.module.css";

const ProductListing = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getAllData = async () => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    data.length === 0 && getAllData();
    console.log("PAge is rendering")
  }, []);
  return (
    <>
      <Input seach={search} setSearch={setSearch} />
      <div className={styles.list}>
        <Filter />
        <Product data={data} filter={search}  />
      </div>
    </>
  );
};

export default ProductListing;
