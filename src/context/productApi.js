// // import { getSearchParamsForLocation } from 'react-router-dom/dist/dom'
// import { api } from "./api";

// export const productApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     // Get request
//     getProducts: build.query({
//       query: () => ({
//         url: "/products",
//       }),
//       providesTags: ["Product"],
//     }),
//   }),
// });

// export const { useGetProductsQuery, useGetSearchProductsQuery } = productApi;
// src/context/productApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://667ff64f56c2c76b495ab12a.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
