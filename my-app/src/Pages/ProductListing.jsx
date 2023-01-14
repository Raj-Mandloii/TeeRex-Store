import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    // getAllData();
  }, []);
  return <div>ProductListing</div>;
};

export default ProductListing;
