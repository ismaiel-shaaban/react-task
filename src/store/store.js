import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import productSlice from './slices/product-slice'
import cartSlice from './slices/cart-slice'
export const store = configureStore({
  reducer: {
    productState: productSlice,
    cart : cartSlice
  },
} ,  applyMiddleware(thunk) )