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
        <NavLink to="/all-products">
          <button className="button1">Все товары</button>
        </NavLink>
      </div>
      <div className="product_carts">
        {data.map((el) => (
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
    </div>
  );
};
export default Products;

// import React, { useState } from "react";
// import "../products/Products.css";
// import { useGetProductsQuery } from "../../context/api/productApi";
// import { Pagination, Box } from "@mui/material";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// const Products = () => {
//   const [page, setPage] = useState(+sessionStorage.getItem("page-count" || 1));
//   const [perPageCount, setPerPageCount] = useState(
//     +localStorage.getItem("page") || 5
//   );
//   const { data } = useGetProductsQuery({ limit: perPageCount, page });
//   console.log(data);

//   const handleChangePagination = (_, value) => {
//     setPage(value);
//     sessionStorage.setItem("page-count", value);
//   };

//   let totalPagination = Math.ceil(data?.data?.count / perPageCount);

//   const handleChangePage = (e) => {
//     let value = e.target.value;
//     setPerPageCount(value);
//     localStorage.setItem("page", e.target.value);

//     let result = Math.ceil((page * perPageCount) / value);

//     setPage(result);
//     sessionStorage.setItem("page-count", result);
//   };

//   return (
//     <div className="container">
//       <div className="product">
//         <h5>Find your favourite smart watch.</h5>
//         <h4>Our Latest Products</h4>
//         <div className="products">
//           {data?.data?.products?.map((product) => (
//             <div className="card" key={product.id}>
//               <img src={product.urls[0]} width={210} height={210} alt="" />
//               <h3 className="product_h3">{product.title}</h3>
//               <h3 className="product_h3">Price: {product.price}$</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <Pagination
//           className="pagination"
//           count={totalPagination}
//           page={page}
//           onChange={handleChangePagination}
//           color="primary"
//         />
//       </Box>
//       <Box>
//         <FormControl sx={{ m: 1, minWidth: 80 }}>
//           <InputLabel id="demo-simple-select-autowidth-label">Pages</InputLabel>
//           <Select
//             labelId="demo-simple-select-autowidth-label"
//             id="demo-simple-select-autowidth"
//             value={perPageCount}
//             onChange={handleChangePage}
//             autoWidth
//             label="Pages"
//           >
//             <MenuItem value={5}>5</MenuItem>
//             <MenuItem value={10}>10</MenuItem>
//             <MenuItem value={15}>15</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//     </div>
//   );
// };

// export default Products;
