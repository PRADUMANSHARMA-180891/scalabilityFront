import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Define initial state
const initialState = {
  surveys: [],
  surveysData: null,
  surveyDataById: null,
  loading: false,
  error: null,
  emailResendLoading: false,
  emailResendError: null,
};

// Async thunks for API calls
export const createSurvey = createAsyncThunk(
  'survey/createSurvey',
  async (surveyData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/survey/create-survey-question`, surveyData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to create survey');
    }
  }
);

export const resendEmail = createAsyncThunk(
  'survey/resendEmail',
  async (emailData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/survey/resendemail`, emailData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to resend email');
    }
  }
);

export const fetchSurveys = createAsyncThunk(
  'survey/fetchSurveys',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/survey/getsurvey`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch surveys');
    }
  }
);

export const fetchSurveyById = createAsyncThunk(
  'survey/fetchSurveyById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/survey/survey/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching survey data');
    }
  }
);

export const deleteSurvey = createAsyncThunk(
  'survey/deleteSurvey',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/survey/survey/${id}`);
      return id; // Return the surveyId so you can remove it from the state
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete survey');
    }
  }
);

export const closeSurvey = createAsyncThunk(
  'survey/closeSurvey',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/survey/survey/close/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to close survey');
    }
  }
);

export const reopenSurvey = createAsyncThunk(
  'survey/reopenSurvey',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/survey/survey/reopen/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to reopen survey');
    }
  }
);
// edit slice 
// Async thunk to edit a survey and its questions
export const editSurveyAndQuestions = createAsyncThunk(
  'surveys/editSurveyAndQuestions',
  async ({ id, surveyData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/survey/editsurvey/${id}`, surveyData);
      return response.data;
    } catch (error) {
      // Send the error message to the action if the API call fails
      return rejectWithValue(error.response.data);
    }
  }
);
const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSurvey.fulfilled, (state, action) => {
        state.loading = false;
        state.surveys.push(action.payload);
      })
      .addCase(createSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchSurveys.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSurveys.fulfilled, (state, action) => {
        state.loading = false;
        state.surveysData = action.payload;
      })
      .addCase(fetchSurveys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(resendEmail.pending, (state) => {
        state.emailResendLoading = true;
        state.emailResendError = null;
      })
      .addCase(resendEmail.fulfilled, (state) => {
        state.emailResendLoading = false;
      })
      .addCase(resendEmail.rejected, (state, action) => {
        state.emailResendLoading = false;
        state.emailResendError = action.payload;
      })

      .addCase(fetchSurveyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSurveyById.fulfilled, (state, action) => {
        state.loading = false;
        state.surveyDataById = action.payload;
      })
      .addCase(fetchSurveyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch survey data';
      })

      .addCase(deleteSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSurvey.fulfilled, (state, action) => {
        state.loading = false;
        state.surveys = state.surveys.filter(survey => survey.id !== action.payload);
      })
      .addCase(deleteSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to delete survey';
      })

      .addCase(closeSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(closeSurvey.fulfilled, (state, action) => {
        state.loading = false;
        // Update the status of the survey in state if needed
        if (state.surveyDataById) {
          state.surveyDataById.status = 'closed';
        }
      })
      .addCase(closeSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to close survey';
      })

      .addCase(reopenSurvey.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reopenSurvey.fulfilled, (state, action) => {
        state.loading = false;
        // Update the status of the survey in state if needed
        if (state.surveyDataById) {
          state.surveyDataById.status = 'open';
        }
      })
      .addCase(reopenSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to reopen survey';
      })
      .addCase(editSurveyAndQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editSurveyAndQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.surveyDataById = action.payload; // Update survey with the new data
      })
      .addCase(editSurveyAndQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // Handle errors if the API fails
      });
  },
});

export default surveySlice.reducer;
