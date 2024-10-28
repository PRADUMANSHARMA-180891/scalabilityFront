import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk for sending the contact form data
export const sendContactUs = createAsyncThunk(`/contactus`, async (contactData) => {
  const response = await axios.post(`${BASE_URL}/contactus/send`, contactData);
  return response.data;
});

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactUs.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendContactUs.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendContactUs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      });
  },
});

export const { resetContactState } = contactUsSlice.actions;

export default contactUsSlice.reducer;
