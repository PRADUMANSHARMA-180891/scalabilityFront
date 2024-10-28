import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Thunk for creating or updating aspiration
export const createOrUpdateAspiration = createAsyncThunk(
    'aspiration/createOrUpdate',
    async (aspirationData, { rejectWithValue }) => {
        const { companyId, relationships, achievements, rituals, wealth } = aspirationData;

        try {
            const response = await axios.post(`${BASE_URL}/personal-plan/create`, {
                companyId,
                relationships,
                achievements,
                rituals,
                wealth,
            });
            return response.data; // Return the success data
        } catch (error) {
            return rejectWithValue(error.response.data); // Return the error message
        }
    }
);

// Thunk for fetching aspiration
export const fetchAspiration = createAsyncThunk(
    'aspiration/fetch',
    async (companyId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/personal-plan/get/${companyId}`);
            return response.data; // Return the fetched data
        } catch (error) {
            return rejectWithValue(error.response.data); // Return the error message
        }
    }
);

// Create the slice
const aspirationSlice = createSlice({
    name: 'aspiration',
    initialState: {
        aspiration: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Handle createOrUpdateAspiration actions
        builder
            .addCase(createOrUpdateAspiration.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrUpdateAspiration.fulfilled, (state, action) => {
                state.loading = false;
                state.aspiration = action.payload; // Save the aspiration data
            })
            .addCase(createOrUpdateAspiration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Capture the error message
            })
            // Handle fetchAspiration actions
            .addCase(fetchAspiration.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAspiration.fulfilled, (state, action) => {
                state.loading = false;
                state.aspiration = action.payload; // Save the fetched aspiration data
            })
            .addCase(fetchAspiration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Capture the error message
            });
    },
});

// Export the actions if needed (currently, we don't have custom actions)
// export const {} = aspirationSlice.actions;

// Export the reducer
export default aspirationSlice.reducer;
