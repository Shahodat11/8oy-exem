import React from "react";
import "../allProduct/allProduct.scss";
import Products from "../../components/products/Products";
import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const AllProduct = () => {
  const apiUrl =
    "https://667ff64f56c2c76b495ab12a.mockapi.io/products?limit=10";
  const { data, loading, error } = useFetch(apiUrl);

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="allProduct">
        <div className="container">
          <NavLink to={`/`}>
            <button className="button11">Главная</button>
          </NavLink>
        </div>
      </div>
      <div className="product">
        <Products data={data} loading={loading} />
      </div>
    </>
  );
};

export default AllProduct;
