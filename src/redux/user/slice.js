import { createSlice } from '@reduxjs/toolkit';
import {
  registerRequest,
  loginRequest,
  logOutRequest,
  getCurrentUser,
} from './operations';

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  isLogin: false,
  token: null,
};

const handleFulfilledAuth = (state, { payload }) => {
  state.userData = payload.user;
  state.token = payload.token;
  state.isLogin = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerRequest.fulfilled, handleFulfilledAuth)
      .addCase(loginRequest.fulfilled, handleFulfilledAuth)
      .addCase(logOutRequest.fulfilled, state => {
        state.userData = {
          name: null,
          email: null,
        };
        state.isLogin = false;
        state.token = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.isLogin = true;
      });
  },
});

export const authReducer = authSlice.reducer;
