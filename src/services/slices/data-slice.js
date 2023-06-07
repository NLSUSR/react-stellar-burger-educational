import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { ingredients: [], isLoading: false, isError: null },
  reducers: {
    request: (state) => {
      state.isLoading = true;
      state.isError = null;
    },
    success: (state, action) => {
      state.ingredients = action.payload;
      state.isLoading = false;
      state.isError = null;
    },
    failed: (state, action) => {
      state.ingredients = [];
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

const dataReducer = dataSlice.reducer;
const dataActions = dataSlice.actions;

export { dataReducer, dataActions };
