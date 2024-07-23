import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// Thunk for updating user
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ Id, formData }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8000/user/updateuser/${Id}`, {
        method: "PUT",
        // headers: {
        //   "Content-type": "application/json",
        // },
        body: formData,
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

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    user: null,
    token: null, // Add token here
    searchResults: [], // Add searchResults to the initial state
    isError: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token; // Save token to state
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
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
  },
});

export default authSlice.reducer;
