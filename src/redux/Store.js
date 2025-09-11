import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./CartSlice";
import ProductApi from "./productsApi";
import OrderApi from "./OrderApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(OrderApi.middleware),
});
setupListeners(store.dispatch);

export default store;
