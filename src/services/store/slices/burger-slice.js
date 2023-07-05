import { createSlice } from "@reduxjs/toolkit";
import done from "../../../images/done.svg";
import { v4 } from "uuid";

const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    bun: {
      _id: 0,
      image: done,
      name: "Добавьте булку",
      price: 0,
    },
    others: [],
    count: [],
  },
  reducers: {
    add: (state, action) => {
      const item = { ...action.payload, key: v4() };
      state.others.push(item);
      state.count.push({ _id: item._id, key: item.key });
    },
    remove: (state, action) => {
      state.others = state.others.filter((i) => i.key !== action.payload.key);
      state.count = state.count.filter((i) => i.key !== action.payload.key);
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
      state.count = [];
    },
  },
});

const burgerReducer = burgerSlice.reducer;
const burgerActions = burgerSlice.actions;

export { burgerReducer, burgerActions };
