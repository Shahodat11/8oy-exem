import { useState } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import Single from "./pages/single/Single";
import { Route, Routes } from "react-router-dom";
import AllProduct from "./pages/allProduct/AllProduct";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blogpage from "./pages/blogpage/Blogpage";
import Shipping from "./pages/shipping/Shipping";
import Katalog from "./pages/katalog/Katalog";
import Kantact from "./pages/kantact/Kantact";
import NotFound from "./pages/notFound/NotFound";
import Garanti from "./pages/garanti/Garanti";
import Return from "./pages/return/Return";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="admin/createProduct" element={<CreateProduct />} />
            <Route path="admin/manageProduct" element={<ManageProduct />} />
          </Route>
        </Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/shipping-and-payment" element={<Shipping />} />
        <Route path="/Catalog" element={<Katalog />} />
        <Route path="/contact" element={<Kantact />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/garant" element={<Garanti />} />
        <Route path="/return" element={<Return />} />
      </Routes>
    </>
  );
}

export default App;
