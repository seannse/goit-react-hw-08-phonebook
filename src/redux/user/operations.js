import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/userApi';

export const loginRequest = createAsyncThunk(
  'user/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.logIn(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const registerRequest = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.register(formData);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOutRequest = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.logOut();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'user/getCurrent',
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;

    if (!persistedToken) return rejectWithValue();

    try {
      const response = await api.fetchCurrentUser(persistedToken);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
