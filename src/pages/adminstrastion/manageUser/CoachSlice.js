import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Create a new coach invitation
// export const createInvite = createAsyncThunk('CoachInvites/createInvite', async (inviteData) => {
//   const response = await axios.post(`${BASE_URL}/coach/invite`, inviteData);
//   return response.data;
// });
export const createInvite = createAsyncThunk('CoachInvites/createInvite', async (inviteData) => {
    const response = await axios.post(`${BASE_URL}/coach/invite`, inviteData);
    return response.data;  // This should return { id, email } from backend
  });
// Get all invitations
export const getAllInvitation = createAsyncThunk('coach/getAllInvitation', async () => {
  const response = await axios.get(`${BASE_URL}/coach/getall`);
  return response.data;
});

// Update an existing coach invitation
export const updateInvite = createAsyncThunk('Coach/updateInvite', async ({ id, updatedData }) => {
  const response = await axios.put(`${BASE_URL}/coach/update/${id}`, updatedData);
  return response.data;
});

const coachInviteSlice = createSlice({
  name: 'coachInvites',
  initialState: {
    invites: [],
    recentInvite: JSON.parse(localStorage.getItem('recentInvite')) || null,
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(createInvite.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(createInvite.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.invites.push(action.payload); // Add invite to list
      state.recentInvite = action.payload; // Save the most recent invite
              // Save the recent invite to localStorage
     localStorage.setItem('recentInvite', JSON.stringify(action.payload));

    })
    .addCase(createInvite.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
      // Get all invitations cases
      .addCase(getAllInvitation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllInvitation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invites = action.payload;
      })
      .addCase(getAllInvitation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Update invite cases
      .addCase(updateInvite.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateInvite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.invites.findIndex(invite => invite.id === action.payload.id);
        if (index !== -1) {
          state.invites[index] = action.payload;
        }
      })
      .addCase(updateInvite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coachInviteSlice.reducer;
