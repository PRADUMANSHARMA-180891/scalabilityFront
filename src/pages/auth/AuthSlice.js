import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for logging in the user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, user_password }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/user/postlogin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, user_password }),
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
// create new user
export const createNewUser = createAsyncThunk(
  'invitation/createNewUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/user/create', userData); // Adjust the endpoint as needed
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
// Thunk for fetching user data
export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const res = await fetch(`http://localhost:8000/user/getlogin`, {
        headers: {
          "authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      return res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// thunk for all user data
export const getAllUser = createAsyncThunk(
  "auth/getAllUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/user/getalluser`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for updating user
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ Id, ...formData }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/user/updateuser/${Id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
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

// Thunk for searching users by name
export const searchUsersByName = createAsyncThunk(
  "auth/searchUsersByName",
  async (name, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/user/search?name=${encodeURIComponent(name)}`, {
        headers: {
          "Content-type": "application/json",
        },
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

// Thunk for selecting a user by ID
export const setSelectedUser = createAsyncThunk(
  "auth/setSelectedUser",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/user/search/${userId}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// delete User
export const deleteUser = createAsyncThunk(
  'kpi/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8000/user/delete/${id}`);
      return id; // Return the ID of the deleted KPI
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// reset password

export const sendResetPasswordEmail = createAsyncThunk(
  'passwordReset/sendResetPasswordEmail',
  async (email, { rejectWithValue }) => {
      try {
          const response = await axios.post('http://localhost:8000/user/resetpassword', { email });
          return response.data;
      } catch (error) {
          return rejectWithValue(error.response.data);
      }
  }
);
// reset password here 
export const resetPassword = createAsyncThunk(
  'passwordReset/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
      try {
          const response = await axios.post('http://localhost:8000/user/reset', { token, password });
          return response.data;
      } catch (error) {
          return rejectWithValue(error.response.data.message);
      }
  }
);
// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    user: null,
    token: null, // Add token here
    searchResults: [], // Add searchResults to the initial state
    getalluser: [],
    // deleteuser :[],
    isError: false,
    errorMessage: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    // Handle loginUser async action
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // Handle fetchUserData async action
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Handle getAllUser async action
    builder.addCase(getAllUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getalluser = action.payload;
    });
    builder.addCase(getAllUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Handle updateUser async action
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // Handle searchUsersByName async action
    builder.addCase(searchUsersByName.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    });
    builder.addCase(searchUsersByName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload;
    });
    builder.addCase(searchUsersByName.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // Handle setSelectedUser async action
    builder.addCase(setSelectedUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    });
    builder.addCase(setSelectedUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(setSelectedUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // Handle deleteUser async action
    builder.addCase(deleteUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.getalluser = state.getalluser.filter((user) => user.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.status = 'failed';
      state.errorMessage = action.payload;
    });

    // Handle sendResetPasswordEmail async action
    builder.addCase(sendResetPasswordEmail.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(sendResetPasswordEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMessage = action.payload.message;
    });
    builder.addCase(sendResetPasswordEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // Handle resetPassword async action
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMessage = action.payload.message;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // Handle createNewUser async action
    builder.addCase(createNewUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(createNewUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
},

});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
