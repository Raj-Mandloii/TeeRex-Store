import { createContext, useReducer, useContext, useState } from "react";
import reducer, { initialState } from "../Reducer/reducer";
import * as types from "../Reducer/actionTypes";

const AppContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [genderCategory, setGenderCategory] = useState([]);
  const [colorCategory, setColorCategory] = useState([]);
  const [priceCategory, setPriceCategory] = useState([]);
  const [typeCategory, setTypeCategory] = useState([]);

  const addToCart = (product) => {
    // console.log("added item");

    const updatedCart = [...state.products, product];
    updatePrice(updatedCart);
    dispatch({
      type: types.ADD_TO_CART,
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    updatePrice(updatedCart);

    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      return (total += product.price * product.addedQuantity || 1);
    });

    dispatch({
      type: types.UPDATE_PRICE,
      payload: {
        total,
      },
    });
  };

  const updateQuantity = (item) => {
    state.products.forEach((el) => {
      if (el.id !== item.id) {
        return el;
      } else if (el.id === item.id && !el.addedQuantity) {
        return (el.addedQuantity = 2);
      } else {
        return el.addedQuantity++;
      }
    });

    dispatch({
      type: types.UPDATE_QUANTITY,
      payload: {
        products: state.products,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
    updateQuantity,
    genderCategory,
    setGenderCategory,
    colorCategory,
    setColorCategory,
    priceCategory,
    setPriceCategory,
    typeCategory,
    setTypeCategory,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useShopping = () => {
  const context = useContext(AppContext);
  return context;
};

export default useShopping;
