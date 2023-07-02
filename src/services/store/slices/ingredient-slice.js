import { createSlice } from "@reduxjs/toolkit";

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    buns: [],
    sauces: [],
    mains: [],
  },
  reducers: {
    distribute: (state, action) => {
      state.buns = action.payload?.filter((i) => i.type === "bun");
      state.sauces = action.payload?.filter((i) => i.type === "sauce");
      state.mains = action.payload?.filter((i) => i.type === "main");
    },
    default: (state) => {
      state.buns = [];
      state.sauces = [];
      state.mains = [];
    },
  },
});

const ingredientsReducer = ingredientsSlice.reducer;
const ingredientsActions = ingredientsSlice.actions;

export { ingredientsReducer, ingredientsActions };
