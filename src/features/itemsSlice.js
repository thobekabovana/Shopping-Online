import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const itemSlice = createSlice({
      name: 'items',
      initialState,
      reducers: {},

//  builder is a parameter
      extraReducers: (builder) => {
        builder.addCase("items/addItems/pending", (state) => {
            state.loading = true
        }).addCase("items/addItems/fulfilled", (state, action) => {
            state.loading = false,
            state.items.push(action.payload)
        }).addCase("items/addItems/rejected", (state, action) => {
            state.error = action.error.message;
        });
      },
})

export default itemSlice.reducer