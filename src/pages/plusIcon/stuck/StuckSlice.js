import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createStuck = createAsyncThunk(
  'stuck/createStuck',
  async (stuckData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/stuck/create', stuckData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

export const fetchStuck = createAsyncThunk(
  'stuck/stuckReport',
  async ({ start_date, end_date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8000/stuck/report?start_date=${start_date}&end_date=${end_date}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

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
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchStuck.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStuck.fulfilled, (state, action) => {
        state.loading = false;
        state.stucks = action.payload;
      })
      .addCase(fetchStuck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default stuckSlice.reducer;
