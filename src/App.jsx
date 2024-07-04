import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Katalog from "./components/katalog/Katalog";
import CardBottom from "./components/cardBottom/CardBottom";
import Products from "./components/products/Products";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
// import Wishlist from "./pages/wishlist/Wishlist";
// import Cart from "./pages/cart/Cart";
// import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./pages/allProduct/AllProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Auth />}>
          <Route path="/Admin" element={<Admin />} />
        </Route>
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/single/:id" element={<Single />} />
        <Route path="/all-product" element={<AllProduct />} />
      </Routes>
    </>
  );
}

export default App;
