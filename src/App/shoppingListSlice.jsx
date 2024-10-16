import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/lists'; // Use the correct port for your JSON server

export const fetchLists = createAsyncThunk('lists/fetchLists', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const addList = createAsyncThunk('lists/addList', async (newList) => {
  const response = await axios.post(apiUrl, newList);
  return response.data;
});

export const updateList = createAsyncThunk('lists/updateList', async (updatedList) => {
  const response = await axios.put(`${apiUrl}/${updatedList.id}`, updatedList);
  return response.data;
});

export const deleteList = createAsyncThunk('lists/deleteList', async (id) => {
  await axios.delete(`${apiUrl}/${id}`);
  return id; // Return the ID to remove it from the state
});

const listSlice = createSlice({
  name: 'lists',
  initialState: {
    lists: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.lists = action.payload;
      })
      .addCase(addList.fulfilled, (state, action) => {
        state.lists.push(action.payload);
      })
      .addCase(updateList.fulfilled, (state, action) => {
        const index = state.lists.findIndex(list => list.id === action.payload.id);
        if (index !== -1) {
          state.lists[index] = action.payload; 
        }
      })
      .addCase(deleteList.fulfilled, (state, action) => {
        state.lists = state.lists.filter(list => list.id !== action.payload); 
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.status = 'succeeded';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  },
});

export default listSlice.reducer;
