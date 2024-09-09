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

// get All suggestion
export const getSuggestion = createAsyncThunk(
  'suggestion/getSuggestion',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/suggestion/get');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//add response
export const addResponse = createAsyncThunk(
  'suggestion/addResponse',
  async ({ id, data }, { rejectWithValue }) => {  // Destructure id and data from a single object
    try {
      const response = await axios.post(`http://localhost:8000/suggestion/response/${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get All response
// Fetch responses for a specific suggestion
export const getResponse = createAsyncThunk(
  'suggestion/getResponses',
  async (suggestionId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:8000/suggestion/response/${suggestionId}`);
      return { suggestionId, responses: response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState: {
    suggestion: [],
    data: [],
    response:[],
    // responsedata : [],
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
      })
      .addCase(getSuggestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSuggestion.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSuggestion.rejected, (state, action) => { 
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.response.push(action.payload);
      })
      .addCase(addResponse.rejected, (state, action) => { 
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getResponse.fulfilled, (state, action) => {
        state.loading = false;
        const { suggestionId, responses } = action.payload;
        state.response[suggestionId] = responses;
      })
      .addCase(getResponse.rejected, (state, action) => { 
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default suggestionSlice.reducer;
