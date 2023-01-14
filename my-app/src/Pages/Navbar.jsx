import React from "react";
import styles from "../Styles/navbar.module.css";
import cartImage from "../assets/cart.png";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>TeeRex Store</h1>

      <div className={styles.cartSection}>
        <h2>Products</h2>

        <div >
          <img className={styles.cartImage} src={cartImage} alt="cart" />
          {/* Quantity of Cart */}
          <p className={styles.quantity}>1</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
