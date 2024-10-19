
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';
// import { BASE_URL } from '../../services/api';

// Async thunk for posting/updating process accountability
export const saveFunctionalAccountability = createAsyncThunk(
    'functionalAccountability/save',
    async (functionalData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/strategy/functional/create`, functionalData);
            return response.data;  // Return the response data as the action payload
        } catch (error) {
            // If there's an error, return the error message
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

export const fetchFunctionalAccountability = createAsyncThunk(
    'strategy/fetchFunctionalAccountability',
    async ({ companyId }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/strategy/functional/get/${companyId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
const FunctionalAccountabilitySlice = createSlice({
    name: 'FunctionalAccountability',
    initialState: {
        data: null, 
        functionalAccountability: null,
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
            .addCase(saveFunctionalAccountability.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(saveFunctionalAccountability.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;  // Store the returned process data
                state.success = true;  // Operation successful
            })
            .addCase(saveFunctionalAccountability.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;  // Store the error message
                state.success = false;
            });
            builder
            .addCase(fetchFunctionalAccountability.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFunctionalAccountability.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.functionalAccountability = action.payload;
            })
            .addCase(fetchFunctionalAccountability.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default FunctionalAccountabilitySlice.reducer;
