import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk for creating or updating ThreeToFive1 data
export const createThreeToFive2 = createAsyncThunk(
  'threeToFive2/createOrUpdate',
  async (ThreeToFiveData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/strategy/fiveyearplan/create`, ThreeToFiveData);  // Ensure the correct API path
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching ThreeToFive1 data by companyId
export const fetchThreetoFiveYearsPlan2 = createAsyncThunk(
  'threeToFive2/fetch',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/strategy/fiveyearplan/get/${companyId}`);  // Ensure the correct API path
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
  const threeToFive1Slice2 = createSlice({
    name: 'threeToFive2',
    initialState,
    reducers: {
      // Add synchronous reducers here if needed
    },
    extraReducers: (builder) => {
      // Handle createThreeToFive1 actions
      builder
        .addCase(createThreeToFive2.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createThreeToFive2.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        })
        .addCase(createThreeToFive2.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  
      // Handle fetchThreetoFiveYearsPlan actions
      builder
        .addCase(fetchThreetoFiveYearsPlan2.pending, (state) => {
          state.loading = true; 
          state.error = null;
        })
        .addCase(fetchThreetoFiveYearsPlan2.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        })
        .addCase(fetchThreetoFiveYearsPlan2.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  
  export default threeToFive1Slice2.reducer;
  