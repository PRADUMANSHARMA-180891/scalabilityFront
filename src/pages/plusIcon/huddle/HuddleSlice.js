import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

export const addHuddle = createAsyncThunk('huddles/addHuddle', async (formData) => {
  const response = await axios.post(`${BASE_URL}/huddle/create`, formData);
  return response.data;
});

export const getAllHuddles = createAsyncThunk('huddles/getAllHuddles', async () => {
  const response = await axios.get(`${BASE_URL}/huddle/gethuddle`);
  return response.data;
});

export const updateHuddles = createAsyncThunk('huddles/updateHuddles', async (updatedHuddles, { rejectWithValue }) => {
  const { id, ...formData } = updatedHuddles;
  try {
    const response = await axios.put(`${BASE_URL}/huddle/updatehuddle/${id}`, formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const searchHuddleByName = createAsyncThunk('huddles/searchHuddleByName', async (huddleType, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/huddle/search?huddleType=${encodeURIComponent(huddleType)}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data || error.message);
  }
});
// delete huddle
export const deleteHuddle = createAsyncThunk('huddles/deleteHuddle', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${BASE_URL}/huddle/deletehuddle/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data || error.message);
  }
});
// huddle report
export const huddleReport = createAsyncThunk(
  'stuck/stuckReport',
  async ({ start_date, end_date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/huddle/report?start_date=${start_date}&end_date=${end_date}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);
const huddleSlice = createSlice({
  name: 'huddles',
  initialState: {
    huddle: [],
    searchResult: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addHuddle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addHuddle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.huddle.push(action.payload);
      })
      .addCase(addHuddle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getAllHuddles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllHuddles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.huddle = action.payload;
      })
      .addCase(getAllHuddles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateHuddles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateHuddles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.huddle.findIndex(h => h.id === action.payload.id);
        if (index !== -1) {
          state.huddle[index] = action.payload;
        }
      })
      .addCase(updateHuddles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchHuddleByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchHuddleByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResult = action.payload;
      })
      .addCase(searchHuddleByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteHuddle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteHuddle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.huddle = state.huddle.filter((huddle) => huddle.id !== action.payload);;
      })
      .addCase(deleteHuddle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(huddleReport.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(huddleReport.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.huddle = action.payload;
      })
      .addCase(huddleReport.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

  },
});

export default huddleSlice.reducer;
