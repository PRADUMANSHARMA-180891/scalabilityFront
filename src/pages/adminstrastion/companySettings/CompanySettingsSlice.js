// features/tags/tagSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk for creating a tag
export const createTag = createAsyncThunk(
  'tags/createTag',
  async (tagData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/tag/create`, tagData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Fetch all tags
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const response = await axios.get(`${BASE_URL}/tag/get`);
    return response.data;
  });
// Update a tag
export const updateTag = createAsyncThunk('tags/updateTag', async ({ id, tag }) => {
    const response = await axios.put(`${BASE_URL}/tag/update/${id}`, tag);
    return response.data;
  });
  
  // Delete a tag
  export const deleteTag = createAsyncThunk('tags/deleteTag', async (id) => {
    await axios.delete(`${BASE_URL}/tag/delete/${id}`);
    return id;
  });
const tagSlice = createSlice({
  name: 'tags',
  initialState: {
    tags: [],
    tagsData:[],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    // You can add reducers here for synchronous actions if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTag.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTag.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tags.push(action.payload); // Add the new tag to the list
      })
      .addCase(createTag.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchTags.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tagsData = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateTag.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTag.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.tags.findIndex(tag => tag.id === action.payload.id);
        if (index !== -1) {
          state.tags[index] = action.payload;
        }
      })
      .addCase(updateTag.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteTag.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTag.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tagsData = state.tagsData.filter(tag => tag.id !== action.payload);
      })
      .addCase(deleteTag.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

  },
});

export default tagSlice.reducer;
