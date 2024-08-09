// slices/huddleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addHuddle = createAsyncThunk('huddles/addHuddle', async (formData) => {
  const response = await axios.post('http://localhost:8000/huddle/create', formData);
  return response.data;
});

export const searchHuddleByName = createAsyncThunk(
  "auth/searchHuddleByName",
  async (huddleType, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/huddle/search?huddleType=${encodeURIComponent(huddleType)}`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const huddleSlice = createSlice({
  name: 'huddles',
  initialState: {
    huddle: [],
    searchResult :[],
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
      .addCase(searchHuddleByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchHuddleByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResult = action.payload;
      })
      .addCase(searchHuddleByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default huddleSlice.reducer;
