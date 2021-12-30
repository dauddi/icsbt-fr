import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    deauthenticate: (state, action) => {
      state.isAuthenticated = false;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

export const { addUser, clearUser, authenticate, deauthenticate } =
  authSlice.actions;

export default authSlice.reducer;
