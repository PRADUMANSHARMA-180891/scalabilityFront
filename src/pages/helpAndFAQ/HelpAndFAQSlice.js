import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../services/api';

export const fetchHelpAndFAQAData = createAsyncThunk(
  'fetchHelpAndFAQAData',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/helpcategory/get`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchHelpCategoryByName = createAsyncThunk(
  'searchHelpCategoryByName',
  async (name, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/helpcategory/search?name=${name}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const HelpAndFAQSlice = createSlice({
  name: 'helpfaq',
  initialState: {
    isLoading: false,
    helpfaq: [],
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHelpAndFAQAData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(fetchHelpAndFAQAData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.helpfaq = action.payload;
      })
      .addCase(fetchHelpAndFAQAData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || 'Failed to fetch data';
      })
      .addCase(searchHelpCategoryByName.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(searchHelpCategoryByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.helpfaq = [action.payload];
      })
      .addCase(searchHelpCategoryByName.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || 'Failed to search data';
      });
  },
});

export default HelpAndFAQSlice.reducer;
