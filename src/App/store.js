import { configureStore } from '@reduxjs/toolkit'
import  shoppingReducer from './ShoppingSlice'
export const store = configureStore({
  reducer: {
   shopping: shoppingReducer
  },
})