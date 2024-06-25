import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/apiClient";

const name = "user";

const initialState = {
  message: "",
  data: {
    socialMedia: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedIn: "",
    },
    email: "",
    picture: "",
    username: "",
  },
  error: "",
  requestStatus: "idle",
};

export const getCurrentUser = createAsyncThunk(
  `${name}/getCurrentUser`,
  async () => {
    try {
      const result = await apiClient.get("/current-user");
      console.log("what is it");
      if (result.status === 200 && result.data) {
        return result.data;
      } else if (result.status === 401) {
        throw new Error(result.data.error);
      }
    } catch (err) {
      throw new Error(err.response?.data?.error);
    }
  }
);

const UserSlice = createSlice({
  name,
  initialState,
  reducers: {
    moreUserAction: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state) => {
      state.requestStatus = "loading";
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      (state.requestStatus = "failed"), (state.error = action.error.message);
      alert(action.error.message);
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      if (action.payload?.error) {
        state.error = action.payload?.error;
        return;
      }
    state.requestStatus = "succeeded",
    alert(action.payload.message)
    state.message = action.payload.message,
      state.data = action.payload.data;
    });
  },
});

export const { moreUserAction } = UserSlice.actions;
export const selectUserData = (store) => store.User;
export default UserSlice.reducer;
