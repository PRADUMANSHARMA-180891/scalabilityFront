// slices/metricSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Thunks for async actions
export const createMetric = createAsyncThunk('metrics/createMetric', async (metricData) => {
  const response = await axios.post(`${BASE_URL}/metric/create`, metricData);
  return response.data;
});

const metricSlice = createSlice({
  name: 'metrics',
  initialState: {
    metric: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMetric.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createMetric.fulfilled, (state, action) => {
        state.metric.push(action.payload);
      })
      .addCase(createMetric.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
     
  },
});

export default metricSlice.reducer;
