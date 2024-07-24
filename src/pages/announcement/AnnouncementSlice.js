import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        const res = await fetch(`http://localhost:8000/announcements/${userId}`);
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
  const announcementSlice = createSlice({
    name: "announcement",
    initialState: {
      announcements: [],
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
        state.announcements = action.payload;
      });
      builder.addCase(fetchAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
    },
  });

export default announcementSlice.reducer;
