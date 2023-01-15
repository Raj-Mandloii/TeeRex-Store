import React from "react";
import SingleCartItem from "../Components/SingleCartItem";
import useShopping from "../Context/AppContext";
import styles from "../Styles/cart.module.css";
const Cart = () => {
  const { total, products } = useShopping();
  
  let totalPrice = products.reduce((sum, el) => {
    console.log(el.addedQuantity, el.price, sum);
    return (sum *= el.price * el.addedQuantity || 1);
  }, 1);

  if (products.length === 0) {
    return <h1 className={styles.emptyCart}>Cart is empty</h1>;
  }

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {products.map((el, i) => (
        <SingleCartItem key={el + i} item={el} />
      ))}

      <hr className={styles.hortizontalLine} />
      <div className={styles.totalPrice}>
        <h2>Total amount {total}</h2>
      </div>
    </div>
  );
};

export default Cart;
