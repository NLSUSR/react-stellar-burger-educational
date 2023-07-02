import { createSlice } from "@reduxjs/toolkit";
import constants from "../../../utils-for-application/constants";

const linkSlice = createSlice({
  name: "link",
  initialState: {
    constructor: constants.switcher(false),
    feed: constants.switcher(false),
    profile: constants.switcher(false),
    profileMenu: constants.switcher(false),
    history: constants.switcher(false),
    logout: constants.switcher(false),
  },
  reducers: {
    constructor: (state, action) => {
      state.constructor = constants.switcher(action.payload);
    },
    feed: (state, action) => {
      state.feed = constants.switcher(action.payload);
    },
    profile: (state, action) => {
      state.profile = constants.switcher(action.payload);
    },
    profileMenu: (state, action) => {
      state.profileMenu = constants.switcher(action.payload);
    },
    history: (state, action) => {
      state.history = constants.switcher(action.payload);
    },
    logout: (state, action) => {
      state.logout = constants.switcher(action.payload);
    },
    default: (state) => {
      state.constructor = constants.switcher(false);
      state.feed = constants.switcher(false);
      state.profile = constants.switcher(false);
      state.profileMenu = constants.switcher(false);
      state.history = constants.switcher(false);
      state.logout = constants.switcher(false);
    },
  },
});

const linkReducer = linkSlice.reducer;
const linkActions = linkSlice.actions;

export { linkReducer, linkActions };
