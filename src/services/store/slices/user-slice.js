import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    check: false,
    error: "",
    message: null,
    response: null,
  },
  reducers: {
    check: (state, action) => {
      state.check = action.payload;
    },
    response: (state, action) => {
      state.response = { ...action.payload };
    },
    message: (state,action) => {
      state.message = { ...action.payload };
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    default: (state) => {
      state.check = false
      state.error = ""
      state.message = null
      state.response = null
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };
