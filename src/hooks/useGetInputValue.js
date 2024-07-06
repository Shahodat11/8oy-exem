import { useQuery } from "@reduxjs/toolkit/query/react";

export const useGetProductsQuery = ({ limit, page }) => {
  return useQuery(["getProducts", { limit, page }], () =>
    fetchProducts(limit, page)
  );
};

const fetchProducts = async (limit, page) => {
  const response = await fetch(`/api/products?limit=${limit}&page=${page}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
8;
