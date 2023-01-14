import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import ProductListing from "../Pages/ProductListing";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
