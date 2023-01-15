import useShopping from "../Context/AppContext";
import styles from "../Styles/filter.module.css";

const Filter = () => {
  const {
    genderCategory,
    setGenderCategory,
    colorCategory,
    setColorCategory,
    priceCategory,
    setPriceCategory,
    typeCategory,
    setTypeCategory,
  } = useShopping();

  const handleChange = (e, category,setCategory) => {
    const option = e.target.value;

    let newCategory = [...category];
    if (category.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      //add it
      newCategory.push(option);
    }
    setCategory(newCategory);
    
  };

  return (
    <div className={styles.filter}>
      {/*  Color  */}
      <h1>Color</h1>
      <div className={styles.color}>
        <input
          id="red"
          name="red"
          value="Red"
          type="checkbox"
          onChange={(e) => handleChange(e, colorCategory,setColorCategory)}
        
        />
        <label htmlFor="red">Red</label>
      </div>
      <div>
        <input
          id="blue"
          name="blue"
          value="Blue"
          type="checkbox"
          onChange={(e) => handleChange(e, colorCategory,setColorCategory)}
        />
        <label htmlFor="blue">Blue</label>
      </div>
      <div>
        <input
          id="green"
          name="green"
          value="Green"
          type="checkbox"
          onChange={(e) => handleChange(e, colorCategory,setColorCategory)}
        />
        <label htmlFor="green">Green</label>
      </div>

      {/* Gender  */}
      <h1>Gender</h1>
      <div className={styles.color}>
        <input
          id="men"
          name="men"
          value="Men"
          type="checkbox"
          onChange={(e) => handleChange(e, genderCategory,setGenderCategory)}
        />
        <label htmlFor="men">Men</label>
      </div>
      <div>
        <input
          id="women"
          name="women"
          value="Women"
          type="checkbox"
          onChange={(e) => handleChange(e, genderCategory,setGenderCategory)}
        />
        <label htmlFor="women">Female</label>
      </div>

      {/* Price */}
      <h1>Price</h1>
      <div className={styles.color}>
        <input
          id="low"
          name="low"
          value="0-250"
          type="checkbox"
          onChange={(e) => handleChange(e, priceCategory,setPriceCategory)}
        />
        <label htmlFor="low">0-Rs 250</label>
      </div>
      <div>
        <input
          id="medium"
          name="medium"
          value="251-450"
          type="checkbox"
          onChange={(e) => handleChange(e, priceCategory,setPriceCategory)}
        />
        <label htmlFor="medium">Rs 251 - 450</label>
      </div>
      <div>
        <input
          id="high"
          name="high"
          value="450"
          type="checkbox"
          onChange={(e) => handleChange(e, priceCategory,setPriceCategory)}
        />
        <label htmlFor="high">Rs 450</label>
      </div>

      {/* Type  */}
      <h1>Type</h1>
      <div className={styles.color}>
        <input
          id="polo"
          name="polo"
          value="Polo"
          type="checkbox"
          onChange={(e) => handleChange(e, typeCategory,setTypeCategory)}
        />
        <label htmlFor="polo">Polo</label>
      </div>
      <div>
        <input
          id="hoodie"
          name="hoodie"
          value="Hoodie"
          type="checkbox"
          onChange={(e) => handleChange(e, typeCategory,setTypeCategory)}
        />
        <label htmlFor="hoodie">Hoodie</label>
      </div>
      <div>
        <input
          id="basic"
          name="basic"
          value="Basic"
          type="checkbox"
          onChange={(e) => handleChange(e, typeCategory,setTypeCategory)}
        />
        <label htmlFor="basic">Basic</label>
      </div>
    </div>
  );
};

export default Filter;
