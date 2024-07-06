// // import React from "react";
// // import { useState } from "react";

// // const initialState = {
// //   title: "",
// //   price: "",
// //   images: "",
// //   desc: "",
// //   category: "",
// // };

// // const Home = () => {
// //   const [formData, setForm] = useState(initialState);

// //   const handleChange = (e) => {
// //     let { name, value } = e.target;
// //     setForm((prev) => ({ ...prev, [name]: value }));
// //   };
// //   const handleCreate = (e) => {
// //     e.preventDefault();
// //     formData.price = +formData.price;
// //     formData.images = formData.images.split("/n").filter((i) => i.trim());
// //     console.log(formData);
// //   };

// //   return (
// //     <div>
// //       <div>
// //         {/* <form onSubmit={handleCreate}>
// //           <input
// //             type="text"
// //             value={formData.title}
// //             onChange={handleChange}
// //             name="title"
// //           />
// //           <input
// //             type="number"
// //             value={formData.price}
// //             onChange={handleChange}
// //             name="price"
// //           />
// //           <textarea
// //             name="images"
// //             value={formData.images}
// //             onChange={handleChange}
// //             id=""
// //           ></textarea>
// //           <textarea
// //             name="desc"
// //             value={formData.desc}
// //             onChange={handleChange}
// //             id=""
// //           ></textarea>
// //           <button>Create</button>
// //         </form> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from "react";
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
// import Banner from "../../components/banner/Banner";
// import Katalog from "../../components/katalog/Katalog";
// import CardBottom from "../../components/cardBottom/CardBottom";
// import Products from "../../components/products/Products";
// // import Products from "../../components/products/Products";
// // import { useGetProductsQuery } from "../../context/productApi";
// // import { Link } from "react-router-dom";
// // // import "../products/Products.css";
// // import Skeleton from "../../pages/skeleton/Skeleton";
// // import { FaRegHeart, FaHeart } from "react-icons/fa";
// // import { IoCartOutline } from "react-icons/io5";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toggleLike } from "../../context/wishlistSlice";
// // import { addToCart } from "../../context/cartSlice";

// const Home = ({ data, loading }) => {
//   let apiUrl = `/products?limit=10 `;
//   const { data, loading } = useFetch(apiUrl);
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <Banner />
//       <Katalog />
//       <CardBottom />
//       <Products data={data?.data} loading={loading} />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Katalog from "../../components/katalog/Katalogg";
import CardBottom from "../../components/cardBottom/CardBottom";
import Products from "../../components/products/Products";
import Bannerr from "../../components/swiper/Banner";
import useFetch from "../../hooks/useFetch"; // Import the custom hook
import Blog from "../../components/blog/Blog";
import BlogBottom from "../../components/blogBottom/BlogBottom";
import Footer from "../../components/footer/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const apiUrl =
    "https://667ff64f56c2c76b495ab12a.mockapi.io/products?limit=10";
  const { data, loading, error } = useFetch(apiUrl);

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <Navbar />
      <Header />
      <Banner />
      <Katalog />
      <CardBottom />
      <Products data={data} loading={loading} />
      <Bannerr />
      <Blog />
      <BlogBottom />
      <Footer />
    </div>
  );
};

export default Home;
