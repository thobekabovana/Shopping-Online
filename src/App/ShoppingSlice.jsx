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
            // state.shoppings.push(action.payload); 
          return { ...state, shoppings: [...state.shoppings, action.payload] };
        },
        deleteShopping: (state, action) => {
            const shoppingToDelete = state.shoppings.find(shopping => shopping.id === action.payload);
            console.log(shoppingToDelete);
            state.shoppings = state.shoppings.filter(shopping => shopping.id !== action.payload);
        }
      }
})
 
export default shoppingSlice.reducer;
export const { addShopping, deleteShopping} = shoppingSlice.actions;

    