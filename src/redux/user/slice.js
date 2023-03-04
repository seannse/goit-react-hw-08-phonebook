import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
  isLoading: false,
  token: null,
  error: null,
};

const extraActions = [
  registerRequest,
  loginRequest,
  logOutRequest,
  getCurrentUser,
];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerRequest.fulfilled, (state, { payload }) => {
        state.userData = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.userData = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
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
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
