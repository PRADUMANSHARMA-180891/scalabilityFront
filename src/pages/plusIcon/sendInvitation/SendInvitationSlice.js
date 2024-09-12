// slices/userInviteSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

export const createInvite = createAsyncThunk('userInvites/createInvite', async (inviteData) => {
  const response = await axios.post(`${BASE_URL}/invitation/invite`, inviteData);
  return response.data;
});
// getall Invitation
export const getAllInvitation = createAsyncThunk('userInvites/getAllInvitation', async () => {
  const response = await axios.get(`${BASE_URL}/invitation/getall`);
  return response.data;
});
export const deleteInvitation = createAsyncThunk('userInvites/deleteInvitation', async (id) => {
  const response = await axios.delete(`${BASE_URL}/invitation/delete/${id}`);
  return response.data;
});
const userInviteSlice = createSlice({
  name: 'userInvites',
  initialState: {
    invites: [],
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
        state.invites.push(action.payload);
      })
      .addCase(createInvite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getAllInvitation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllInvitation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invites = action.payload
      })
      .addCase(getAllInvitation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteInvitation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteInvitation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invites = state.invites.filter((invite)=>invite.id !== action.payload)
      })
      .addCase(deleteInvitation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userInviteSlice.reducer;
