import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      state.total += action.payload;
    },
    remove: (state, action) => {
      state.total -= action.payload;
    },
    default: (state) => {
      state.total = 0;
    },
  },
});

const priceReducer = priceSlice.reducer;
const priceActions = priceSlice.actions;

export { priceReducer, priceActions };
