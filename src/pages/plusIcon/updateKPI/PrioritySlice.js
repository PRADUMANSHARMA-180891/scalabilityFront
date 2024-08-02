import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to create a new priority
export const createPriority = createAsyncThunk(
  'priority/createPriority',
  async (priorityData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/priority/create', priorityData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// get priority 
export const fetchPriorities = createAsyncThunk(
  'priority/fetchPriorities',
  async ({ start_date, end_date }, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/priority/getpriority', {
        params: { start_date, end_date }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const prioritySlice = createSlice({
  name: 'priority',
  initialState: {
    priority: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPriority.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPriority.fulfilled, (state, action) => {
        state.loading = false;
        state.priority = action.payload.data;
      })
      .addCase(createPriority.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPriorities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPriorities.fulfilled, (state, action) => {
        state.loading = false;
        state.priority = action.payload.flatMap(period => period.Priorities);;
      })
      .addCase(fetchPriorities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default prioritySlice.reducer;
