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
