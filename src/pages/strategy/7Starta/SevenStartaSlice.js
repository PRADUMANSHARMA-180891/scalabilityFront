
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';
// import { BASE_URL } from '../../services/api';

// Async thunk for posting/updating process accountability
export const save7Starta = createAsyncThunk(
    'save7Starta/save',
    async (StartaData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/strategy/starta/create`, StartaData);
            return response.data;  // Return the response data as the action payload
        } catch (error) {
            // If there's an error, return the error message
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

export const fetch7Starta = createAsyncThunk(
    'strategy/fetch7Starta',
    async ({ companyId }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/strategy/starta/get/${companyId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
const SevenStartaSlice = createSlice({
    name: 'SevenStarta',
    initialState: {
        data: null, 
        SevenStarta: null,
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
            .addCase(save7Starta.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(save7Starta.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;  // Store the returned process data
                state.success = true;  // Operation successful
            })
            .addCase(save7Starta.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;  // Store the error message
                state.success = false;
            });
            builder
            .addCase(fetch7Starta.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetch7Starta.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.SevenStarta = action.payload;
            })
            .addCase(fetch7Starta.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default SevenStartaSlice.reducer;
