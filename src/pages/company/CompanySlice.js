import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunks for company operations
export const createCompany = createAsyncThunk(
  "createCompany",
  async ({ company_name, company_size, first_name, last_name, email, phone, role, business_habit }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/company/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ company_name, company_size, first_name, last_name, email, phone, role, business_habit }),
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

export const fetchCompanyData = createAsyncThunk("fetchCompanyData", async () => {
  const res = await fetch(`http://localhost:8000/company/getcompany`);
  return res.json();
});

export const deleteCompanyData = createAsyncThunk(
  "deleteCompanyData",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/company/deletecompany/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Something went wrong while deleting company data");
      }
      return id; // Return the ID of the deleted company
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: {
    isLoading: false,
    company: [],
    selectedCompany: 'Dropdown button', // Add initial state for selected company
    isError: false,
    errorMessage: null,
  },
  reducers: {
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompany.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(createCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.company = action.payload;
      })
      .addCase(createCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(fetchCompanyData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCompanyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.company = action.payload;
      })
      .addCase(fetchCompanyData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteCompanyData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteCompanyData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.company = state.company.filter((company) => company.id !== action.payload);
      })
      .addCase(deleteCompanyData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { setSelectedCompany } = companySlice.actions;
export default companySlice.reducer;
