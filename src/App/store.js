// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import  shoppingReducer from './ShoppingSlice'
import userReducer from '../App/RegisterSlice'; 
import loginReducer from "../App/LogInSlice"
const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    users: userReducer,
    login: loginReducer,
  },
});
export default store;


