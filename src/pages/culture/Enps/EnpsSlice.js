import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk for creating a survey
export const createSurvey = createAsyncThunk(
  'survey/createSurvey',
  async (surveyData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/enps/create`, surveyData);  // API endpoint for creating survey
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching surveys
export const fetchSurveys = createAsyncThunk(
  'survey/fetchSurveys',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/enps/get`);  // API endpoint for fetching surveys
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching surveys
export const fetchEnpsById = createAsyncThunk(
  'survey/fetchSurveysById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/enps/getbyid/${id}`);  // API endpoint for fetching surveys
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching surveys
export const deleteEnpsSurvey = createAsyncThunk(
  'survey/deleteEnpsSurvey',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/enps/delete/${id}`);  // API endpoint for fetching surveys
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 
export const closeEnpsSurvey = createAsyncThunk(
  'survey/closeSurvey',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/enps/close/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to close survey');
    }
  }
);

export const reopenEnpsSurvey = createAsyncThunk(
  'survey/reopenSurvey',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/enps/reopen/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to reopen survey');
    }
  }
);

// submit survey response
// Async thunk for submitting survey response
export const submitSurveyResponse = createAsyncThunk(
  'survey/submitResponse',
  async ({ surveyId, userId, responseText }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/enps/survey-response`, {
        surveyId,
        userId,
        responseText,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to submit response');
    }
  }
);

const eNPSSlice = createSlice({
  name: 'enps',
  initialState: {
    enps: [],           // List of surveys
    EnpsDataById: [],           // List of surveys
    currentSurvey: null, 
          // Store a specific survey when needed
    loading: false,         // Loading state for async actions
    error: null,            // Error state
  },
  reducers: {
    clearMessages: (state) => {
      state.successMessage = '';
      state.errorMessage = '';
    },
    // Optional: Add any non-async reducers here
  },
  extraReducers: (builder) => {
    // For createSurvey
    builder
      .addCase(createSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSurvey.fulfilled, (state, action) => {
        state.loading = false;
        state.enps.push(action.payload);  // Add the created survey to the list
      })
      .addCase(createSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // For fetchSurveys
    builder
      .addCase(fetchSurveys.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSurveys.fulfilled, (state, action) => {
        state.loading = false;
        state.enps = action.payload;  // Replace the surveys list with the fetched data
      })
      .addCase(fetchSurveys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchEnpsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEnpsById.fulfilled, (state, action) => {
        state.loading = false;
        state.EnpsDataById = action.payload;  // Replace the surveys list with the fetched data
      })
      .addCase(fetchEnpsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      builder.addCase(deleteEnpsSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEnpsSurvey.fulfilled, (state, action) => {
        state.loading = false;
        state.enps = state.enps.filter(enps => enps.id !== action.payload);
      })
      .addCase(deleteEnpsSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to delete survey';
      });

      builder.addCase(closeEnpsSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(closeEnpsSurvey.fulfilled, (state, action) => {
        state.loading = false;
        // Update the status of the survey in state if needed
        if (state.EnpsDataById) {
          state.EnpsDataById.status = 'closed';
        }
      })
      .addCase(closeEnpsSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to close survey';
      });

      builder.addCase(reopenEnpsSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reopenEnpsSurvey.fulfilled, (state, action) => {
        state.loading = false;
        // Update the status of the survey in state if needed
        if (state.EnpsDataById) {
          state.EnpsDataById.status = 'open';
        }
      })
      .addCase(reopenEnpsSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to reopen survey';
      })
      // For submitSurveyResponse
    builder
    .addCase(submitSurveyResponse.pending, (state) => {
      state.loading = true;
      state.errorMessage = '';
      state.successMessage = '';
    })
    .addCase(submitSurveyResponse.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = 'Response submitted successfully';
    })
    .addCase(submitSurveyResponse.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload || 'Failed to submit response';
    });
  },
});


export const { clearMessages } = eNPSSlice.actions;
export default eNPSSlice.reducer;