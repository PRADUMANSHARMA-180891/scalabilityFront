import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk for logging in the user
export const createCompany = createAsyncThunk(
  "createCompany",
  async ({ company_name,
    company_size,
    first_name,
    last_name,
    email,
    phone,
    role,
    business_habit }, 
    { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/company/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ 
            company_name,
            company_size,
            first_name,
            last_name,
            email,
            phone,
            role,
            business_habit }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Thunk for fetching user data
export const fetchCompanyData = createAsyncThunk("fetchUserData", async () => {
  const res = await fetch(`http://localhost:8000/company/getcompany`);
  return res.json();
});

// Auth slice
const companySlice = createSlice({
  name: "company",
  initialState: {
    isLoading: false,
    company: [],
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createCompany.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    });
    builder.addCase(createCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(createCompany.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(fetchCompanyData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCompanyData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(fetchCompanyData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default companySlice.reducer;
