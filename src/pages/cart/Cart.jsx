import React, { useEffect } from "react";
import "../cart/cart.scss";
import { TiDeleteOutline } from "react-icons/ti";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../context/cartSlice";
import Emptyy from "../../components/emptyy/Emptyy";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const carts = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let cartItems = carts?.map((item) => (
    <div key={item.id}>
      <div className="cart-title">
        <button onClick={() => dispatch(removeItemFromCart(item))}>
          <TiDeleteOutline />
        </button>
        <img className="cart-img" src={item.image} width={150} alt="" />
        <p className="cart-title">{item.title}</p>
        <div className="plus-minus">
          <button
            className="plus"
            disabled={item?.quantity <= 1}
            onClick={() => dispatch(decrementCartQuantity(item))}
          >
            -
          </button>
          <span className="son">{item?.quantity}</span>
          <button
            className="minus"
            onClick={() => dispatch(incrementCartQuantity(item))}
          >
            +
          </button>
        </div>
      </div>
      <br />
    </div>
  ));
  return (
    <>
      <div className="container">
        <Navbar />
        <Header />
        <div className="cart-pagee">
          <div className="cart-name">
            <h4 className="cart-h4">PRODUCT</h4>
            <div className="cart-names">
              <h4 className="cart-h4">PRICE</h4>
              <h4 className="cart-h4">QTY</h4>
              <h4 className="cart-h4">UNIT PRICE</h4>
            </div>
          </div>
          <br />
          <hr />
        </div>
        {carts.length ? (
          <>
            <div className="container">
              {cartItems}
              <button onClick={() => navigate("/checkout")}>Check Out</button>
            </div>
          </>
        ) : (
          <Emptyy text="Cart" />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
