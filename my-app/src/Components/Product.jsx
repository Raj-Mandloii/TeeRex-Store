import React from "react";
import SingleProduct from "./SingleProduct";
import styles from "../Styles/product.module.css";
import useShopping from "../Context/AppContext";

const Product = ({ data, filter }) => {
  const { genderCategory, colorCategory, priceCategory, typeCategory } =
    useShopping();
  let selectFilters = {
    color: colorCategory,
    gender: genderCategory,
    // price: priceCategory,
    type: typeCategory,
  };
  console.log(priceCategory);
  const getValue = (value) =>
    typeof value === "string" ? value.toUpperCase() : value;

  function categoryFilter(array, selectFilters) {
    const filterKeys = Object.keys(selectFilters);

    return array
      .filter((item) => {
        return filterKeys.every((key) => {
          if (!selectFilters[key].length) return true;

          return selectFilters[key].find((filter) => {
            return getValue(filter) === getValue(item[key]);
          });
        });
      })
      .filter(
        // to filter based on the input field
        (item) =>
          item.name.toUpperCase().includes(filter.toUpperCase().trim()) ||
          item.color.toUpperCase().includes(filter.toUpperCase().trim()) ||
          item.type.toUpperCase().includes(filter.toUpperCase().trim())
      )
      .map((item) => <SingleProduct key={item.id} singledata={item} />);
  }

  // JSX tree
  return (
    <div className={styles.product}>{categoryFilter(data, selectFilters)}</div>
  );
};

export default Product;
