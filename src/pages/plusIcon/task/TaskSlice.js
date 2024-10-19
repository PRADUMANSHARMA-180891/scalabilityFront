import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../services/api';

// Async thunk to create a new task
export const createTask = createAsyncThunk(
  'task/createTask',
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/task/create`, taskData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to edit an existing task
export const editTask = createAsyncThunk(
  'task/editTask',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/task/update/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to delete a task
export const deleteTask = createAsyncThunk(
  'task/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/task/delete/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch tasks by updatedAt range
export const fetchTasksByUpdatedRange = createAsyncThunk(
  'task/fetchTasksByUpdatedRange',
  async ({ start_date, end_date }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/task/by-updated-range?start_date=${start_date}&end_date=${end_date}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Get all task data
export const fetchAllTask = createAsyncThunk(
  'task/fetchAllTask',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/task/get`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    tasksData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle create task
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle edit task
      .addCase(editTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(editTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle delete task
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle fetch tasks by updatedAt range
      .addCase(fetchTasksByUpdatedRange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasksByUpdatedRange.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasksByUpdatedRange.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle fetch all tasks
      .addCase(fetchAllTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasksData = action.payload;
      })
      .addCase(fetchAllTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default taskSlice.reducer;
