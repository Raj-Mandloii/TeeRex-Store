import React, { useContext, useReducer } from "react";
import useShopping from "../Context/AppContext";
import styles from "../Styles/singleproduct.module.css";

const SingleProduct = ({ singledata }) => {
  const { products, addToCart, updateQuantity } = useShopping();

  const handleClick = (item) => {
    if (item.quantity > 0) {
      let alreadyExist = products.find((el) => el.id === item.id);

      if (alreadyExist) {
        if (alreadyExist.addedQuantity >= item.quantity) {
          alert("Out of Stock");
          return;
        }
        updateQuantity(alreadyExist);
      } else {
        item.quantity--;
        addToCart(item);
      }
    } else {
      alert("Out of Stock");
    }
  };
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={singledata.imageURL}
        alt={singledata.name}
      />
      <h3 className={styles.name}>{singledata.name}</h3>
      <div className={styles.cartSection}>
        <h3>Rs {singledata.price}</h3>
        <button
          onClick={() => handleClick(singledata)}
          className={styles.cartButton}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;

// {
//     "id": 1,
//     "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
//     "name": "Black Polo",
//     "type": "Polo",
//     "price": 250,
//     "currency": "INR",
//     "color": "Black",
//     "gender": "Men",
//     "quantity": 3
//     },
