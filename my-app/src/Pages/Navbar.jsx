import React from "react";
import styles from "../Styles/navbar.module.css";
import cartImage from "../assets/cart.png";
import useShopping from "../Context/AppContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { products } = useShopping();

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.productSection}>
        <h1>TeeRex Store</h1>
      </Link>

      <div className={styles.cartSection}>
        <Link to="/" className={styles.productSection}>
          <h2 >Products</h2>
        </Link>
        <Link to="/cart">
          <div className={styles.cart}>
            <img className={styles.cartImage} src={cartImage} alt="cart" />
            {/* Quantity of Cart */}
            <p className={styles.quantity}>{products.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
