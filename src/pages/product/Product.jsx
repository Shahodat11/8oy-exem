import React, { useEffect, useState } from "react";
import axios from "axios";
import "../product/product.css";
import { Link } from "react-router-dom";
import img from "../../assets/20230528180416535300 1 (1).svg";

const Product = () => {
  const [data, setData] = useState(null);
  const [searchValue, setSeachValue] = useState("");
  const [filteredData, setFiltredData] = useState(null);

  useEffect(() => {
    axios
      .get("https://667ff64f56c2c76b495ab12a.mockapi.io/products")
      .then((res) => {
        setData(res.data);
        setFiltredData(res.data);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setFiltredData(
        data.filter((product) =>
          product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
      );
    }
  }, [searchValue]);
  // console.log(filteredData);
  return (
    <div>
      <div className="product_search">
        <input
          className="search"
          type="text"
          value={searchValue}
          placeholder="Поиск по товарам"
          onChange={(e) => setSeachValue(e.target.value)}
        />
        {searchValue.trim() ? (
          filteredData?.slice(0, 3)?.map((el) => (
            <div className="product_search sear" key={el.id}>
              <div className="navv">
                <Link to={`/single/${el.id}`}>
                  <img className="imgg" src={img} width={50} alt="" />
                </Link>
                <span className="span">{el.title}</span>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Product;
