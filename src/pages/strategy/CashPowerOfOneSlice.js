import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../services/api';

// Async thunk for posting/updating Cash Acceleration
export const savePowerOfOne = createAsyncThunk(
    'strategy/savePowerOfOne/save',
    async (powerOfOne, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/strategy/powerofone/create`, powerOfOne);
            return response.data;  // Return the response data as the action payload
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

// Async thunk for fetching Cash Acceleration by companyId
export const fetchPowerOfOne = createAsyncThunk(
    'strategy/fetchPowerOfOne/fetch',
    async ({companyId}, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/strategy/powerofone/get/${companyId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

// Slice for managing Cash Acceleration
const CashAccelerationSlice = createSlice({
    name: 'PowerOfOne',
    initialState: {
        data: null, 
        powerofone: null,
        status: 'idle',
        loading: false,
        error: null,
        success: false,
    },
    reducers: {
        // Add additional reducers if necessary
    },
    extraReducers: (builder) => {
        builder
            // Handle saveCashAcceleration lifecycle
            .addCase(savePowerOfOne.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(savePowerOfOne.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;  // Store the returned cash acceleration data
                state.success = true;  // Operation successful
            })
            .addCase(savePowerOfOne.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;  // Store the error message
                state.success = false;
            })

            // Handle fetchCashAcceleration lifecycle
            .addCase(fetchPowerOfOne.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPowerOfOne.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.powerofone = action.payload;  // Store the fetched data
            })
            .addCase(fetchPowerOfOne.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default CashAccelerationSlice.reducer;
