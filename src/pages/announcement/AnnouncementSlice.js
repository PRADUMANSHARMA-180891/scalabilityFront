import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to create an announcement
export const createAnnouncement = createAsyncThunk(
  "announcement/createAnnouncement",
  async ({ title, emailSubject, message, isChecked, userId }, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/announcement/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, emailSubject, message, isChecked, userId }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//
export const fetchAnnouncements = createAsyncThunk(
    "announcement/fetchAnnouncements",
    async (userId, { rejectWithValue }) => {
      try {
        const res = await fetch(`http://localhost:8000/announcement/get/${userId}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // Async thunk for editing an announcement
export const editAnnouncement = createAsyncThunk(
  'announcement/editAnnouncement',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:8000/announcement/update/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for deleting an announcement
export const deleteAnnouncement = createAsyncThunk(
  'announcement/deleteAnnouncement',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8000/announcement/delete/${id}`);
      return id; // return the id to remove from state
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

  // fetch 
  const announcementSlice = createSlice({
    name: "announcement",
    initialState: {
      announcements: [],
      data: [],
      isLoading: false,
      isError: false,
      errorMessage: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createAnnouncement.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      });
      builder.addCase(createAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.announcements.push(action.payload);
      });
      builder.addCase(createAnnouncement.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
      builder.addCase(fetchAnnouncements.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      });
      builder.addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });

      builder.addCase(editAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.Announcements.findIndex(
          (announcement) => announcement.id === action.payload.id
        );
        if (index !== -1) {
          state.data.Announcements[index] = action.payload;
        }
      })
      .addCase(editAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Announcement
      .addCase(deleteAnnouncement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.loading = false;
        state.data.Announcements = state.data.Announcements.filter(
          (announcement) => announcement.id !== action.payload
        );
      })
      .addCase(deleteAnnouncement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
  });

export default announcementSlice.reducer;
