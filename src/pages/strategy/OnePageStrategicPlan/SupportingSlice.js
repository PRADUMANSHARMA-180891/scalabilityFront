import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async Thunk to create or update support data
export const createOrUpdateSupport = createAsyncThunk(
  'support/createOrUpdateSupport',
  async (supportData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/strategy/support/create`, supportData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async Thunk to fetch support data by companyId
export const fetchSupportByCompanyId = createAsyncThunk(
  'support/fetchSupportByCompanyId',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/strategy/support/get/${companyId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// remove foundation item
export const removeSupportItem = createAsyncThunk(
    'foundation/removeItem',
    async ({ companyId, supportField, id }, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`${BASE_URL}/strategy/support/remove/${companyId}/${supportField}/${id}`);
        return { supportField, id }; // Return the field and ID for the reducer
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
// Initial state
const initialState = {
  supportData: null,
  loading: false,
  error: null,
  message: null,
};

// Support Slice
const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle create or update supportData
      .addCase(createOrUpdateSupport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrUpdateSupport.fulfilled, (state, action) => {
        state.loading = false;
        state.supportData = action.payload.data;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(createOrUpdateSupport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Handle fetch supportData by companyId
      .addCase(fetchSupportByCompanyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSupportByCompanyId.fulfilled, (state, action) => {
        state.loading = false;
        state.supportData = action.payload;
        state.error = null;
      })
      .addCase(fetchSupportByCompanyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
       // Handle removeFoundationItem
    builder
    .addCase(removeSupportItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeSupportItem.fulfilled, (state, action) => {
        state.loading = false;
        const { supportField, id } = action.payload; // Correct destructuring here
        if (state.supportData && state.supportData[supportField]) {
          // Parse the current support data
          const currentData = JSON.parse(state.supportData[supportField]);
          // Filter out the removed item
          const updatedData = currentData.filter(item => item.id !== id);
          // Update the state with the new support data
          state.supportData[supportField] = JSON.stringify(updatedData);
        }
      })
      .addCase(removeSupportItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
});

// Export actions and reducer
export const { clearMessage, clearError } = supportSlice.actions;
export default supportSlice.reducer;
