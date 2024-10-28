import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk to handle the shareCompany API request
export const shareCompany = createAsyncThunk(
  'share/shareCompany',
  async ({ email, message }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/share/share`, { email, message });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to share company');
    }
  }
);

// Slice to manage the state of sharing company information
const shareSlice = createSlice({
  name: 'share',
  initialState: {
    shareStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    clearShareStatus: (state) => {
      state.shareStatus = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(shareCompany.pending, (state) => {
        state.shareStatus = 'loading';
        state.error = null;
      })
      .addCase(shareCompany.fulfilled, (state) => {
        state.shareStatus = 'succeeded';
      })
      .addCase(shareCompany.rejected, (state, action) => {
        state.shareStatus = 'failed';
        state.error = action.payload || 'Failed to share company';
      });
  },
});

export const { clearShareStatus } = shareSlice.actions;

export default shareSlice.reducer;
