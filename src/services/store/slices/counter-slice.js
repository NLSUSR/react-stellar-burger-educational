import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: [],
  },
  reducers: {
    increment: (state, action) => {
      state.count.push(action.payload);
    },
    decrement: (state, action) => {
      state.count = state.count.filter((i) => i.key !== action.payload.key);
    },
    default: (state) => {
      state.count = [];
    },
  },
});

const counterReducer = counterSlice.reducer;
const counterActions = counterSlice.actions;

export { counterReducer, counterActions };
