import { configureStore } from "@reduxjs/toolkit";
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
