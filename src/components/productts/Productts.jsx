import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import "../products/Products.scss";
import img from "../../assets/20230528180416535300 1 (1).svg";

const Productts = ({ data, loading, isAdmin }) => {
  const [more, setMoree] = useState(8);
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  return (
    <div className=" container">
      <div className="productts">
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
                      <FaHeart
                        className="like-img"
                        style={{ color: "black" }}
                      />
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
                {isAdmin ? <button>oknjdfa</button> : <></>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Productts;
