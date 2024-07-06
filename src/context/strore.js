// import { configureStore  } from '@reduxjs/toolkit'
// import counterSlice from './counterSlice'
// import wishlistSlice from './wishlistSlice'
// import cartSlice from './cartSlice'
// import { api } from "./api";

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     wishlist: wishlistSlice,
//     cart: cartSlice,
//     [api.reducerPath]: api.reducer,
//   },
//     middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(api.middleware),
// })
// src/context/store.js
// src/context/store.js
import { configureStore } from "@reduxjs/toolkit";
// import { productApi } from "./productApi";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartSlice";
import { api } from "./api/index";
import authSlice from "../context/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export { store };
