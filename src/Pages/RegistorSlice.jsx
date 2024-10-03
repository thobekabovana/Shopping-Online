// registerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  updateName,
  updateEmail,
  updatePassword,
  updateConfirmPassword,
  setError,
} = registerSlice.actions;

export default registerSlice.reducer;