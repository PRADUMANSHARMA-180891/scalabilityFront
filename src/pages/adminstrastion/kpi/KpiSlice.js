import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch KPIs
export const fetchKPIs = createAsyncThunk('kpi/fetchKPIs', async () => {
  const response = await axios.get('http://localhost:8000/kpi/get');
  return response.data;
});

export const createKpi = createAsyncThunk(
  'kpi/createKpi',
  async (KpiData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/kpi/create', KpiData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateKpi = createAsyncThunk(
  'kpi/updateKpi',
  async (updatedKpi, { rejectWithValue }) => {
    try {
      const { Id, ...formData } = updatedKpi;
      const response = await axios.put(`http://localhost:8000/kpi/update/${Id}`, formData);
      return response.data; // return the updated KPI
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteKpi = createAsyncThunk(
  'kpi/deleteKpi',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8000/kpi/delete/${id}`);
      return id; // Return the ID of the deleted KPI
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const kpiSlice = createSlice({
  name: 'kpi',
  initialState: {
    kpi: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createKpi.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createKpi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.kpi.push(action.payload);
      })
      .addCase(createKpi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchKPIs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchKPIs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.kpi = action.payload;
      })
      .addCase(fetchKPIs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateKpi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateKpi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.kpi = state.kpi.map((kpi) =>
          kpi.id === action.payload.id ? action.payload : kpi
        );
      })
      .addCase(updateKpi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteKpi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteKpi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.kpi = state.kpi.filter((kpi) => kpi.id !== action.payload);
      })
      .addCase(deleteKpi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default kpiSlice.reducer;
