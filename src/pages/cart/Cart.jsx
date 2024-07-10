import React from "react";
import "../cart/cart.scss";
import img from "../../assets/20230528180416535300 1 (1).svg";
import { RiDeleteBinLine } from "react-icons/ri";
import Emptyy from "../../components/emptyy/Emptyy";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../context/cartSlice";
import Karzinka from "../../components/karzinka/Karzinka";

const Cart = () => {
  const carts = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(carts);

  let totalPrice = carts?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let cartItems = carts?.map((item) => (
    <div key={item.id}>
      <hr />
      <div className="karzink">
        <img className="karzinka-img" src={img} width={50} alt="" />
        <div className="title-price">
          <p className="karzinka-title">{item.title}</p>
          <p className="karzinka-price">{item.price?.brm()}</p>
        </div>
        <p className="apisana">
          Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;
        </p>
        <p className="apisana">RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
        <div className="plus-minus">
          <div className="karzinkaa">
            <button
              className="plus-minuss"
              disabled={item?.quantity <= 1}
              onClick={() => dispatch(decrementCartQuantity(item))}
            >
              -
            </button>
            <div className="span">
              <b className="b">{item?.quantity}</b>
            </div>
            <button
              className="plus-minuss"
              onClick={() => dispatch(incrementCartQuantity(item))}
            >
              +
            </button>
            <button
              className="cart-delete"
              onClick={() => dispatch(removeItemFromCart(item))}
            >
              <RiDeleteBinLine className="cart-delete" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        {carts.length ? (
          <>
            <NavLink to={`/`}>
              <button className="button11">Корзина</button>
            </NavLink>
            <h2 className="shipping-h2">Контакты</h2>
            <h2 className="jami">Oбщий : {totalPrice?.brm()}</h2>
            <div className="container">
              <div className="cart-pagee">
                <div className="karzinka">
                  <h5 className="karzinka-h5">Фото</h5>
                  <h5 className="karzinka-h5">Товары</h5>
                  <h5 className="karzinka-h5">Описание</h5>
                  <h5 className="karzinka-h5">Артикул</h5>
                  <h5 className="karzinka-h5">Количество</h5>
                </div>
                {cartItems}
              </div>
            </div>
          </>
        ) : (
          <Emptyy text="Cart" />
        )}
      </div>
      <Karzinka />
      <Footer />
    </>
  );
};

export default Cart;
