// src/store.js
import { configureStore } from '@reduxjs/toolkit';
// import listsReducer from '../features/listSlice';
import userReducer from '../App/RegisterSlice'; 
import loginReducer from "../App/LogInSlice"
const store = configureStore({
  reducer: {
    // lists: listsReducer,
    users: userReducer,
    login: loginReducer,
  },
});
export default store;