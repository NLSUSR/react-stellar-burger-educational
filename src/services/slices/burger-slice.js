import { createSlice } from "@reduxjs/toolkit";
import done from "../../images/done.svg";

const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    bun: {
      _id: 0,
      image: done,
      name: "Добавьте булку",
      price: 0,
    },
    others: []
  },
  reducers: {
    add: (state, action) => {
      state.others.push(action.payload);
    },
    remove: (state, action) => {
      state.others = state.others.filter((i) => i.key !== action.payload.key);
    },
    sort: (state, action) => {
      state.others = action.payload;
    },
    replace: (state, action) => {
      state.bun = action.payload;
    },
    default: (state) => {
      state.bun = {
        image: done,
        name: "Добавьте булку",
        price: 0,
      };
      state.others = [];
    },
  },
});

const burgerReducer = burgerSlice.reducer;
const burgerActions = burgerSlice.actions;

export { burgerReducer, burgerActions };
