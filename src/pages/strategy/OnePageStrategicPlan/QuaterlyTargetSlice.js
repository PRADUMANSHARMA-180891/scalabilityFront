import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk for creating or updating Quaterly data
export const createQuaterly = createAsyncThunk(
  'quaterly/createOrUpdate',
  async (quaterlyData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/strategy/quatrely/create`, quaterlyData); // Replace with correct API endpoint
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching Quaterly data by companyId
export const fetchQuaterly = createAsyncThunk(
  'quaterly/fetch',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/strategy/quatrely/get/${companyId}`);  // Replace with correct API endpoint
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// The slice
const quaterlySlice = createSlice({
  name: 'quaterly',
  initialState,
  reducers: {
    // Add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    // Handle createQuaterly actions
    builder
      .addCase(createQuaterly.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuaterly.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(createQuaterly.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle fetchQuaterly actions
    builder
      .addCase(fetchQuaterly.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuaterly.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchQuaterly.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default quaterlySlice.reducer;
