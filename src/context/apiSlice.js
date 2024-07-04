// src/context/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit, page }) => `products?limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
