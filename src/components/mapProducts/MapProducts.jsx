import React, { useState } from "react";
import Card from "../../components/card/Card";
import {
  // useGetProductDetailQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { useSearchParams } from "react-router-dom";
import Skileton from "../../pages/skeleton/Skeleton";

const MapProducts = ({ isAdmin }) => {
  const [proSlice, setProSlice] = useState(8);
  const { data, isLoading } = useGetProductsQuery();

  const card = data?.slice(0, proSlice);

  // console.log(card);
  return (
    <section className="map__products">
      <div className="container">
        {isLoading ? <Skileton count={8} /> : <></>}
        <Card isAdmin={isAdmin} data={card} />

        <button
          className="seeMore"
          onClick={() => setProSlice((p) => p + proSlice)}
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default MapProducts;
