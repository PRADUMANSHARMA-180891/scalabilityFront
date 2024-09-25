import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async Thunks
export const fetchAlignmentChecklists = createAsyncThunk(
  'alignmentChecklist/fetchChecklists',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/strategy/alignment/get/${companyId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Something went wrong');
    }
  }
);

export const addAlignmentChecklist = createAsyncThunk(
  'alignmentChecklist/addChecklist',
  async ({ text, companyId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/strategy/alignment/create`, { text, companyId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Failed to add checklist item');
    }
  }
);

export const updateAlignmentChecklist = createAsyncThunk(
  'alignmentChecklist/updateChecklist',
  async ({ id, completed }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/strategy/alignment/update/${id}`, { completed });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Failed to update checklist item');
    }
  }
);

// Slice
const alignmentChecklistSlice = createSlice({
  name: 'alignmentChecklist',
  initialState: {
    checklists: [],
    loading: false,
    error: null,
    addLoading: false, // For tracking the loading state of adding a checklist
    addError: null,
    updateLoading: false, // For tracking the loading state of updating a checklist
    updateError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Checklists
      .addCase(fetchAlignmentChecklists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlignmentChecklists.fulfilled, (state, action) => {
        state.loading = false;
        state.checklists = action.payload;
      })
      .addCase(fetchAlignmentChecklists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Checklist
      .addCase(addAlignmentChecklist.pending, (state) => {
        state.addLoading = true;
        state.addError = null;
      })
      .addCase(addAlignmentChecklist.fulfilled, (state, action) => {
        state.addLoading = false;
        state.checklists.push(action.payload);
      })
      .addCase(addAlignmentChecklist.rejected, (state, action) => {
        state.addLoading = false;
        state.addError = action.payload;
      })

      // Update Checklist
      .addCase(updateAlignmentChecklist.pending, (state) => {
        state.updateLoading = true;
        state.updateError = null;
      })
      .addCase(updateAlignmentChecklist.fulfilled, (state, action) => {
        state.updateLoading = false;
        const index = state.checklists.findIndex((checklist) => checklist.id === action.payload.id);
        if (index !== -1) {
          state.checklists[index] = action.payload;
        }
      })
      .addCase(updateAlignmentChecklist.rejected, (state, action) => {
        state.updateLoading = false;
        state.updateError = action.payload;
      });
  },
});

// Export the reducer
export default alignmentChecklistSlice.reducer;
