import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../Redux/Slice/States/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
