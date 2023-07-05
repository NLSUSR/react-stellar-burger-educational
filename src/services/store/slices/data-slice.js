import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    response: null,
    error: null,
  },
  reducers: {
    response: (state, action) => {
      state.response = { ...action.payload };
    },
    error: (state, action) => {
      state.error = action.payload;
    },
  },
});

const dataReducer = dataSlice.reducer;
const dataActions = dataSlice.actions;

export { dataReducer, dataActions };
