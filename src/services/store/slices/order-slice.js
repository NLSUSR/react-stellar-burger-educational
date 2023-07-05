import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    response: null,
    error: null,
  },
  reducers: {
    response: (state, action) => {
      state.response = { ...action.payload };
    },
    error: (state, action) => {
      state.error = { ...action.payload };
    },
    default: (state) => {
      state.response = null;
      state.error = null;
    },
  },
});

const orderReducer = orderSlice.reducer;
const orderActions = orderSlice.actions;

export { orderReducer, orderActions };
