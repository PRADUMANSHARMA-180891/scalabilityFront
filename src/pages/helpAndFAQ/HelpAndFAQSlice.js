import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHelpAndFAQAData = createAsyncThunk(
  "fetchHelpAndFAQAData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/helpcategory/get`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const HelpAndFAQSlice = createSlice({
  name: "helpfaq",
  initialState: {
    isLoading: false,
    helpfaq: [],
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHelpAndFAQAData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(fetchHelpAndFAQAData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.helpfaq = action.payload;
      })
      .addCase(fetchHelpAndFAQAData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "Failed to fetch data";
      });
  },
});

export default HelpAndFAQSlice.reducer;
