import { createSlice } from "@reduxjs/toolkit";


const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
      shoppings: [],
    //   totalExpense: 0,
    //   totalIncome: 0,
    },

    reducers: {
        addShopping: (state, action) => {
          return { ...state, shoppings: [...state.shoppings, action.payload] };
        },
      }
})
 
export default shoppingSlice.reducer;
export const { addShopping} = shoppingSlice.actions;

    