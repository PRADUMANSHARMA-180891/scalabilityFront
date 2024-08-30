import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to create a new period
export const createPeriod = createAsyncThunk(
  'period/createPeriod',
  async (periodData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/period/create', periodData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch all periods (with optional filters)
export const fetchPeriods = createAsyncThunk(
  'period/fetchPeriods',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/period/get');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch all periods (duplicate, can be used differently)
export const fetchAllPeriods = createAsyncThunk(
  'period/fetchAllPeriods',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/period/get');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const periodSlice = createSlice({
  name: 'period',
  initialState: {
    periods: [],
    loading: false,
    error: null,
    lastCreatedPeriodId: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPeriod.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPeriod.fulfilled, (state, action) => {
        state.loading = false;
        state.periods.push(action.payload);
        state.lastCreatedPeriodId = action.payload.id; // Assuming action.payload contains the newly created period with an 'id' field
      })
      .addCase(createPeriod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPeriods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeriods.fulfilled, (state, action) => {
        state.loading = false;
        state.periods = action.payload;
        // Commented out lastCreatedPeriodId update as it's unrelated to fetch
        // state.lastCreatedPeriodId = action.payload[action.payload.length - 1]?.id; // Get the latest period ID
      })
      .addCase(fetchPeriods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllPeriods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPeriods.fulfilled, (state, action) => {
        state.loading = false;
        state.periods = action.payload;
        // No need to update lastCreatedPeriodId here either
      })
      .addCase(fetchAllPeriods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default periodSlice.reducer;
