import React from "react";
import useFetch from "../../../hooks/useFetch";
import Productts from "../../../components/productts/Productts";

const ManageProduct = () => {
  const apiUrl =
    "https://667ff64f56c2c76b495ab12a.mockapi.io/products?limit=10";
  const { data, loading, error } = useFetch(apiUrl);
  return <Productts data={data} loading={loading} />;
};

export default ManageProduct;
