import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk to create or update foundation data
export const createOrUpdateFoundation = createAsyncThunk(
  'foundation/createOrUpdateFoundation',
  async (foundationData, { rejectWithValue }) => {
    
    try {
      const { companyId, foundation1, foundation2, foundation3, foundation4 } = foundationData;
      const response = await axios.post(`${BASE_URL}/strategy/foundation/create`, {
        companyId,
        foundation1,
        foundation2,
        foundation3,
        foundation4
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch foundation data by companyId
export const fetchFoundationByCompanyId = createAsyncThunk(
  'foundation/fetchFoundationByCompanyId',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/strategy/foundation/get/${companyId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// remove foundation item
export const removeFoundationItem = createAsyncThunk(
  'foundation/removeItem',
  async ({ companyId, foundationField, id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/strategy/foundation/remove/${companyId}/${foundationField}/${id}`);
      return { foundationField, id }; // Return the field and ID for the reducer
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const foundationSlice = createSlice({
  name: 'foundation',
  initialState: {
    foundationData: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Optionally define any additional reducers if needed
  },
  extraReducers: (builder) => {
    // Handle createOrUpdateFoundation
    builder
      .addCase(createOrUpdateFoundation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrUpdateFoundation.fulfilled, (state, action) => {
        state.loading = false;
        state.foundationData = action.payload.data;
      })
      .addCase(createOrUpdateFoundation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle fetchFoundationByCompanyId
    builder
      .addCase(fetchFoundationByCompanyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFoundationByCompanyId.fulfilled, (state, action) => {
        state.loading = false;
        state.foundationData = action.payload;
      })
      .addCase(fetchFoundationByCompanyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
       // Handle removeFoundationItem
    builder
    .addCase(removeFoundationItem.pending, (state) => {
      state.loading = true;
    })
    .addCase(removeFoundationItem.fulfilled, (state, action) => {
      state.loading = false;
      const { foundationField, id } = action.payload;
      if (state.foundationData && state.foundationData[foundationField]) {
        // Parse the current foundation data
        const currentData = JSON.parse(state.foundationData[foundationField]);
        // Filter out the removed item
        const updatedData = currentData.filter(item => item.id !== id);
        // Update the state with the new foundation data
        state.foundationData[foundationField] = JSON.stringify(updatedData);
      }
    })
    .addCase(removeFoundationItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default foundationSlice.reducer;
