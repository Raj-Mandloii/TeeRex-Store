import React from "react";
import styles from "../Styles/filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter}>
      {/*  Color  */}
      <h1>Color</h1>
      <div className={styles.color}>
        <input id="red" name="red" value="Red" type="checkbox" />
        <label htmlFor="red">Red</label>
      </div>
      <div>
        <input id="blue" name="blue" value="Blue" type="checkbox" />
        <label htmlFor="blue">Blue</label>
      </div>
      <div>
        <input id="green" name="green" value="Green" type="checkbox" />
        <label htmlFor="green">Green</label>
      </div>

      {/* Gender  */}
      <h1>Gender</h1>
      <div className={styles.color}>
        <input id="men" name="men" value="Men" type="checkbox" />
        <label htmlFor="men">Men</label>
      </div>
      <div>
        <input id="women" name="women" value="Women" type="checkbox" />
        <label htmlFor="women">Female</label>
      </div>
     

      {/* Price */}
      <h1>Price</h1>
      <div className={styles.color}>
        <input id="low" name="low" value="0" type="checkbox" />
        <label htmlFor="low">0-Rs250</label>
      </div>
      <div>
        <input id="medium" name="medium" value="251" type="checkbox" />
        <label htmlFor="medium">Rs251-450</label>
      </div>
      <div>
        <input id="high" name="high" value="450" type="checkbox" />
        <label htmlFor="high">Rs450</label>
      </div>

      {/* Type  */}
      <h1>Type</h1>
      <div className={styles.color}>
        <input id="polo" name="polo" value="Polo" type="checkbox" />
        <label htmlFor="polo">Polo</label>
      </div>
      <div>
        <input id="hoodie" name="hoodie" value="Hoodie" type="checkbox" />
        <label htmlFor="hoodie">Hoodie</label>
      </div>
      <div>
        <input id="basic" name="basic" value="Basic" type="checkbox" />
        <label htmlFor="basic">Basic</label>
      </div>
    </div>
  );
};

export default Filter;
