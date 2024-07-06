import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import "../wishlist/wishlist.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Productts from "../../components/productts/Productts";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  return (
    <>
      <div className="container">
        <Navbar />
        <Header />
        {wishlist.length ? (
          <div className="productts">
            <h2 className="kompone-h2">Избранные товары</h2>
            <Productts title="Sevimlilar" data={wishlist} />
          </div>
        ) : (
          <Empty
            className="empty"
            text="We didn't find what you were looking for :("
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
