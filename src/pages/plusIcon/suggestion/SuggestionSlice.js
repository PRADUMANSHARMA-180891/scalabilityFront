import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createSuggestion = createAsyncThunk('suggestion/createSuggestion', async (suggestionData,{rejectWithValue}) => {
  try {
    const response = await axios.post('http://localhost:8000/suggestion/create', suggestionData);
    return response.data;
  } catch (error) {
    rejectWithValue(error.response.data);
  }
});


const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState: {
    suggestion: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSuggestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSuggestion.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestion.push(action.payload);
      })
      .addCase(createSuggestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default suggestionSlice.reducer;
