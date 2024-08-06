// slices/huddleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addHuddle = createAsyncThunk('huddles/addHuddle', async (formData) => {
  const response = await axios.post('http://localhost:8000/huddle/create', formData);
  return response.data;
});

const huddleSlice = createSlice({
  name: 'huddles',
  initialState: {
    huddle: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addHuddle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addHuddle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.huddle.push(action.payload);
      })
      .addCase(addHuddle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default huddleSlice.reducer;
