import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    getData: {
      response: null,
      error: null,
    },
  },
  reducers: {
    getData: (state, action) => {
      state.getData.response = action.payload.response;
      state.getData.error = action.payload.error;
    },
  },
});

const dataReducer = dataSlice.reducer;
const dataActions = dataSlice.actions;

export { dataReducer, dataActions };
