import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  removeContact,
} from 'redux/contacts/operations';

import {
  getCurrentUser,
  registerRequest,
  loginRequest,
  logOutRequest,
} from 'redux/user/operations';

const extraActions = [
  getContacts,
  addContact,
  removeContact,
  getCurrentUser,
  registerRequest,
  loginRequest,
  logOutRequest,
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

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const globalReducer = globalSlice.reducer;
