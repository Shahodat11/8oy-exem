import React, { useState } from "react";
import Skeleton from "../../pages/skeleton/Skeleton";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import "../products/Products.css";
import img from "../../assets/20230528180416535300 1 (1).svg";

const Products = ({ data, loading }) => {
  const [more, setMoree] = useState(8);
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  if (loading) {
    return <Skeleton count={8} />;
  }

  return (
    <div className=" container">
      <div className="product_top">
        <h2 className="product_h2">Популярные товары</h2>
        <NavLink to={`/allproduct`}>
          <button className="button1">Все товары</button>
        </NavLink>
      </div>
      <div className="product_carts">
        {data?.slice(0, more).map((el) => (
          <div className="product_cart" key={el.id}>
            <div className="cart-like-img">
              <div className="cart-img">
                <Link to={`/single/${el.id}`}>
                  <img className="product_img" src={img} width={50} alt="" />
                </Link>
              </div>
              <div className="cart-like">
                <button
                  className="like"
                  onClick={() => dispatch(toggleLike(el))}
                >
                  {wishlist?.some((item) => item.id === el.id) ? (
                    <FaHeart className="like-img" style={{ color: "black" }} />
                  ) : (
                    <FaRegHeart className="like-img" />
                  )}
                </button>
              </div>
            </div>
            <p className="product_title" style={{ padding: "13px 0" }}>
              {el.title}
            </p>
            <p className="old_price" style={{ padding: "13px 0" }}>
              <del>7 000₽</del>
            </p>
            <div className="price_cartbutton">
              <p className="product_price" style={{ padding: "13px 0" }}>
                {el.price}₽
              </p>
              <button
                onClick={() => dispatch(addToCart(el))}
                className="cart-button"
              >
                {cart?.some((item) => item.id === el.id) ? (
                  <IoCartSharp
                    className="cart-button"
                    style={{ color: "black", cursor: "pointer" }}
                  />
                ) : (
                  <IoCartOutline className="cart-button" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="button1" onClick={() => setMoree((p) => p + more)}>
        See More
      </button>
    </div>
  );
};
export default Products;
