import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createStuck = createAsyncThunk('stuck/createStuck', async (stuckData,{rejectWithValue}) => {
  try {
    const response = await axios.post('http://localhost:8000/stuck/create', stuckData);
    return response.data;
  } catch (error) {
    rejectWithValue(error.response.data);
  }
});


const stuckSlice = createSlice({
  name: 'stuck',
  initialState: {
    stucks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStuck.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStuck.fulfilled, (state, action) => {
        state.loading = false;
        state.stucks.push(action.payload);
      })
      .addCase(createStuck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stuckSlice.reducer;
