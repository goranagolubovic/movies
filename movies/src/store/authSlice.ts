import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authReducers = authSlice.reducer;
export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
