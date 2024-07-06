// import { useState } from "react";

// export const useGetInputValue = (initialState) => {
//     const [formData, setFormData] = useState(initialState)

//     const handleChange = e => {
//         const {name, value} = e.target
//         setFormData(prev => ({...prev, [name]: value}))
//     }

//     return {formData, handleChange, setFormData}
// }
// useGetInputValue.js
import { useQuery } from "@reduxjs/toolkit/query/react"; // Import useQuery from RTK Query or your API service file

export const useGetProductsQuery = ({ limit, page }) => {
  // Assuming you have an API service or function to fetch the products
  return useQuery(["getProducts", { limit, page }], () =>
    fetchProducts(limit, page)
  );
};

// fetchProducts can be your API call to fetch products
const fetchProducts = async (limit, page) => {
  const response = await fetch(`/api/products?limit=${limit}&page=${page}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
8;
