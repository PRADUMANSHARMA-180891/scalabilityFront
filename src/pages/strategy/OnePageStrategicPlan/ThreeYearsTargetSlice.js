import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk for creating or updating ThreeToFive1 data
export const createThreeToFive1 = createAsyncThunk(
  'threeToFive1/createOrUpdate',
  async (ThreeToFiveData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/strategy/threetofive/create`, ThreeToFiveData);  // Ensure the correct API path
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching ThreeToFive1 data by companyId
export const fetchThreetoFiveYearsPlan = createAsyncThunk(
  'threeToFive1/fetch',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/strategy/threetofive/get/${companyId}`);  // Ensure the correct API path
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for removing a plan item
export const removeThreeYearPlanItem = createAsyncThunk(
  'threeYearPlan/removeItem',
  async ({ companyId, ThreeyearplanField, id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/strategy/threetofive/remove/${companyId}/${ThreeyearplanField}/${id}`
      );
      return { id, field: ThreeyearplanField }; // Return the id and field to handle state update
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
const threeToFive1Slice = createSlice({
  name: 'threeToFive1',
  initialState,
  reducers: {
    // Add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    // Handle createThreeToFive1 actions
    builder
      .addCase(createThreeToFive1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createThreeToFive1.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(createThreeToFive1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle fetchThreetoFiveYearsPlan actions
    builder
      .addCase(fetchThreetoFiveYearsPlan.pending, (state) => {
        state.loading = true; 
        state.error = null;
      })
      .addCase(fetchThreetoFiveYearsPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchThreetoFiveYearsPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
      builder
      .addCase(removeThreeYearPlanItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeThreeYearPlanItem.fulfilled, (state, action) => {
        state.loading = false;
        const { id, field } = action.payload;
  
        // Check if state.data exists and the field is an array before applying filter
        if (state.data && Array.isArray(state.data[field])) {
          // Filter out the item with the matching id from the field
          state.data[field] = state.data[field].filter((item) => item.id !== id);
        } else {
          // If the field is not an array, log an error or handle it appropriately
          console.error(`Expected state.data[${field}] to be an array, but got:`, state.data[field]);
        }
      })
      .addCase(removeThreeYearPlanItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to remove plan item';
      });
  },
});


export default threeToFive1Slice.reducer;
