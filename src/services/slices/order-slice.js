import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    name: "",
    number: 0,
    success: false,
  },
  reducers: {
    get: (state, action) => {
      state.name = action.payload.name;
      state.number = action.payload.order.number;
      state.success = action.payload.success;
    },
    default: (state) => {
      state.name = "";
      state.number = 0;
      state.success = false;
    },
  },
});

const orderReducer = orderSlice.reducer;
const orderActions = orderSlice.actions;

export { orderReducer, orderActions };
