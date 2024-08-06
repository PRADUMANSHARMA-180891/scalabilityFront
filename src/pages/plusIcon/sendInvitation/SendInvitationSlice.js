// slices/userInviteSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createInvite = createAsyncThunk('userInvites/createInvite', async (inviteData) => {
  const response = await axios.post('http://localhost:8000/invitation/invite', inviteData);
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
      });
  },
});

export default userInviteSlice.reducer;
