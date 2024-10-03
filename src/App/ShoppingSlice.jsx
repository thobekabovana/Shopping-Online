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
            const index = state.shoppings.findIndex(shopping => shopping.id === action.payload);
            if (index !== -1) {
                state.shoppings.splice(index, 1);
            }
        },
        updateShopping: (state, action) => {
            const index = state.shoppings.findIndex(shopping => shopping.id === action.payload.id);
            if (index !== -1) {
                state.shoppings.splice(index, 1);
            }
        }
    }
})
 
export default shoppingSlice.reducer;
export const { addShopping, deleteShopping} = shoppingSlice.actions;

    