
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk for posting/updating process accountability
export const save4DVision = createAsyncThunk(
    'save4DVision/save',
    async (FourDVisionData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/strategy/vision/create`, FourDVisionData);
            return response.data;  // Return the response data as the action payload
        } catch (error) {
            // If there's an error, return the error message
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

export const fetch4DVision = createAsyncThunk(
    'strategy/fetch4DVision',
    async ({ companyId }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/strategy/vision/get/${companyId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
const FourDVisionSlice = createSlice({
    name: 'FourDVision',
    initialState: {
        data: null, 
        FourDVision: null,
        status: 'idle', // Will store the saved process data
        loading: false,  // Loading state for API calls
        error: null,  // Error state for API calls
        success: false  // To track if save operation was successful
    },
    reducers: {
        // Add additional reducers if necessary
    },
    extraReducers: (builder) => {
        builder
            .addCase(save4DVision.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(save4DVision.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;  // Store the returned process data
                state.success = true;  // Operation successful
            })
            .addCase(save4DVision.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;  // Store the error message
                state.success = false;
            });
            builder
            .addCase(fetch4DVision.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetch4DVision.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.FourDVision = action.payload;
            })
            .addCase(fetch4DVision.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default FourDVisionSlice.reducer;
