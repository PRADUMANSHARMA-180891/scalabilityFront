import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Thunk to create or update theme
export const createOrUpdateTheme = createAsyncThunk(
  'theme/createOrUpdateTheme',
  async (themeData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/strategy/theme/create`, themeData);  // Replace with actual API route
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to fetch theme by companyId
export const fetchTheme = createAsyncThunk(
  'theme/fetchTheme',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/strategy/theme/get/${companyId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeData: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    resetThemeState: (state) => {
      state.themeData = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle create/update theme
      .addCase(createOrUpdateTheme.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createOrUpdateTheme.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.themeData = action.payload.data;
        state.error = null;
      })
      .addCase(createOrUpdateTheme.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      // Handle fetch theme
      .addCase(fetchTheme.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTheme.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.themeData = action.payload;
        state.error = null;
      })
      .addCase(fetchTheme.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const { resetThemeState } = themeSlice.actions;

export default themeSlice.reducer;
