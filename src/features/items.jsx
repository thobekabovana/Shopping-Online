import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
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
            state.items.push()
        })
      }
})