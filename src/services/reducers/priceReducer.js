import actions from "../actions/actions.js";

const priceReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      return {
        ...state,
        total: state.total + action.payload,
      };
    case actions.DELETE:
      return {
        ...state,
        total: state.total - action.payload,
      };
      case actions.RESET:
      return {
        ...state,
        total: 0,
      };
    default:
      return state;
  }
};

export default priceReducer;
