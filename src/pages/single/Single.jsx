import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";

const Single = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  console.log(data);
  return (
    <section className="single">
      <div className="container">
        <h1>{data?.title}</h1>
      </div>
    </section>
  );
};

export default Single;
