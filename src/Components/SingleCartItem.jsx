import React from "react";
import useShopping from "../Context/AppContext";
import styles from "../Styles/singleCart.module.css";

const SingleCartItem = ({ item }) => {
  const { total, products, addToCart, updateQuantity, removeFromCart } =
  useShopping();
  
  const handleClick = (item) => {
    removeFromCart(item);
  };
  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.imageURL} alt={item.name} />
      <div className={styles.nameAndPrice}>
        <h3 className={styles.name}>{item.name}</h3>
        <h3>Rs {item.price}</h3>
      </div>
      <div>
        <select defaultValue={item.addedQuantity || 1}>
          <Quantity item={item.addedQuantity || item.quantity} />
        </select>
        <button onClick={() => handleClick(item)} className={styles.cartButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

function Quantity({ item }) {
  let quantity = Array.from({ length: item }, (_, i) => i + 1);

  //   if the quantity is only one
  quantity.length == 0 && quantity.push(1);
  return (
    <>
      {quantity.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </>
  );
}

export default SingleCartItem;
