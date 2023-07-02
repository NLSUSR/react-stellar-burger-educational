import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    createOrder: { response: null, error: null },
  },
  reducers: {
    createOrder: (state, action) => {
      state.createOrder.response = action.payload.response;
      state.createOrder.error = action.payload.error;
    },
    default: (state) => {
      state.createOrder = { response: null, error: null };
    },
  },
});

const orderReducer = orderSlice.reducer;
const orderActions = orderSlice.actions;

export { orderReducer, orderActions };
