import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../lib/apiClient";
import { PURGE } from "redux-persist";
import { StorageService } from "../../lib/storage";

const name = "auth";

const initialState = {
  user: {
    email: "",
    picture: "",
    username: "",
  },
  isLoggedIn: false,
  requestStatus: "idle",
  error: "",
};

export const registerUser = createAsyncThunk(
  `${name}/registerUser`,
  async (registrationData) => {
    if (!registrationData) return;
    try {
      const result = await apiClient.post("/auth/register", registrationData);
      if (result.status === 200 && result.data) {
        return result.data;
      } else if (result.status === 400) {
        throw new Error(result.data.error);
      }
    } catch (err) {
      throw new Error(err.response?.data?.error || "Something went wrong");
    }
  }
);

export const logInUser = createAsyncThunk(
  `${name}/logInUser`,
  async (logInCredential) => {
    if (!logInCredential) return;
    try {
      const result = await apiClient.post("/auth/login", logInCredential);
      if (result.status === 200 && result.data) {
        return result.data;
      } else if (result.status === 400) {
        throw new Error(result.data.error);
      }
    } catch (err) {
      throw new Error(err.response?.data?.error || "Something went wrong");
    }
  }
);
const AuthSlice = createSlice({
  name,
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.user = {
        email: "",
        picture: "",
        username: "",
      };
      state.isLoggedIn = false;
      state.requestStatus = "idle";
      state.error = "";
      StorageService.removeAuthToken();
      window.location.assign("auth/login");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      alert(action.error.message);
      state.error = action.error.message;
      state.requestStatus = "failed";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload?.error) {
        state.error = action.payload?.error;
        return;
      }
      alert(action.payload.message);
      window.location.assign("/auth/login");
    });
    builder.addCase(logInUser.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      alert(action.error.message);
      state.requestStatus = "failed";
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      if (action.payload?.error) {
        state.error = action.payload?.error;
        return;
      }
      alert(action.payload.message);
      state.user = action.payload.user;
      state.isLoggedIn = true;
      StorageService.setAutHToken(action.payload.token);
    });
    builder.addCase(PURGE, (state) => {
      customEntityAdapter.removeAll(state);
    });
  },
});

export const { logoutAction } = AuthSlice.actions;
export default AuthSlice.reducer;
