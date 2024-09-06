import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks for company operations
export const createCompany = createAsyncThunk(
  "company/createCompany",
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

      const data = await res.json();
      console.log("Response Data:", data);  // Add this to see the actual response

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const fetchCompanyData = createAsyncThunk("company/fetchCompanyData", async () => {
  const res = await fetch(`http://localhost:8000/company/getcompany`);
  return res.json();
});

// company report data

export const fetchCompanyReport = createAsyncThunk("company/fetchCompanyReport", async () => {
  const res = await fetch(`http://localhost:8000/company/getreport`);
  return res.json();
});
// getSingle Company data
export const getCompanyDataById = createAsyncThunk(
  "company/getCompanyDataById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/company/getcompanybById/${id}`, {
        method: "get",
      });
      if (!res.ok) {
        throw new Error("Something went wrong while deleting company data");
      }
      const data = await res.json();
      return data; ; // Return the ID of the deleted company
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//update compnay data 
export const updateCompany = createAsyncThunk(
  'company/updateCompany', // Corrected thunk name
  async (updatedCompany, { rejectWithValue }) => {
    try {
      const { id, ...formData } = updatedCompany; // Make sure 'id' is the correct key
      const response = await axios.put(`http://localhost:8000/company/update/${id}`, formData);
      return response.data; // Return the updated company data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteCompanyData = createAsyncThunk(
  "company/deleteCompanyData",
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

// Slice
const companySlice = createSlice({
  name: "company",
  initialState: {
    isLoading: false,
    company: [],
    companydata:[],
    report:[],
    updated:null,
    selectedCompanydata: null,
    selectedCompanyId: null, // Initial state for selected company ID
    selectedCompanyName: 'Dropdown button', // Initial state for selected company name
    isError: false,
    errorMessage: null,
  },
  reducers: {
    setSelectedCompany: (state, action) => {
      state.selectedCompanyId = action.payload.id;
      state.selectedCompanyName = action.payload.name;
      // state.selectedCompanydata = action.payload
      localStorage.setItem('selectedCompany', JSON.stringify(action.payload)); // Save to local storage
    },
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
        state.companydata = action.payload;
      })
      .addCase(fetchCompanyData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCompanyReport.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCompanyReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.report = action.payload;
      })
      .addCase(fetchCompanyReport.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getCompanyDataById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCompanyDataById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCompanydata = action.payload;
      })
      .addCase(getCompanyDataById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateCompany.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updated = action.payload;
      })
      .addCase(updateCompany.rejected, (state) => {
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
      })
  },
});

export const { setSelectedCompany } = companySlice.actions;
export default companySlice.reducer;
