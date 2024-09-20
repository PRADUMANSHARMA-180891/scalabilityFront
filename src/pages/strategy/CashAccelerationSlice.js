import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../services/api';

// Async thunk for posting/updating Cash Acceleration
export const saveCashAcceleration = createAsyncThunk(
    'strategy/CashAcceleration/save',
    async (cashAccelerationData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/strategy/cashacceleration/create`, cashAccelerationData);
            return response.data;  // Return the response data as the action payload
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

// Async thunk for fetching Cash Acceleration by companyId
export const fetchCashAcceleration = createAsyncThunk(
    'strategy/CashAcceleration/fetch',
    async (companyId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/strategy/get/${companyId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
);

// Slice for managing Cash Acceleration
const CashAccelerationSlice = createSlice({
    name: 'CashAcceleration',
    initialState: {
        data: null, 
        cashAcceleration: null,
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
            .addCase(saveCashAcceleration.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(saveCashAcceleration.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;  // Store the returned cash acceleration data
                state.success = true;  // Operation successful
            })
            .addCase(saveCashAcceleration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;  // Store the error message
                state.success = false;
            })

            // Handle fetchCashAcceleration lifecycle
            .addCase(fetchCashAcceleration.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCashAcceleration.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cashAcceleration = action.payload;  // Store the fetched data
            })
            .addCase(fetchCashAcceleration.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default CashAccelerationSlice.reducer;
