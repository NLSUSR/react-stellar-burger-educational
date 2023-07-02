import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    cheked: false,
    login: { response: null, error: null },
    register: { response: null, error: null },
    forgotPassword: { response: null, error: null },
    resetPassword: { response: null, error: null },
    logout: { response: null, error: null },
    update: { response: null, error: null },
    getUser: { response: null, error: null },
  },
  reducers: {
    setCheked: (state, action) => {
      state.cheked = action.payload;
    },
    login: (state, action) => {
      state.login.response = action.payload.response;
      state.login.error = action.payload.error;
    },
    register: (state, action) => {
      state.register.response = action.payload.response;
      state.register.error = action.payload.error;
    },
    forgotPassword: (state, action) => {
      state.forgotPassword.response = action.payload.response;
      state.forgotPassword.error = action.payload.error;
    },
    resetPassword: (state, action) => {
      state.resetPassword.response = action.payload.response;
      state.resetPassword.error = action.payload.error;
    },
    logout: (state, action) => {
      state.logout.response = action.payload.response;
      state.logout.error = action.payload.error;
    },
    update: (state, action) => {
      state.update.response = action.payload.response;
      state.update.error = action.payload.error;
    },
    getUser: (state, action) => {
      state.getUser.response = action.payload.response;
      state.getUser.error = action.payload.error;
    },
    default: (state) => {
      state.login = { response: null, error: null };
      state.register = { response: null, error: null };
      state.forgotPassword = { response: null, error: null };
      state.resetPassword = { response: null, error: null };
      state.logout = { response: null, error: null };
      state.update = { response: null, error: null };
      state.getUser = { response: null, error: null };
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };