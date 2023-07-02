import { combineReducers } from "redux";
import { burgerReducer } from "../slices/burger-slice";
import { counterReducer } from "../slices/counter-slice";
import { dataReducer } from "../slices/data-slice";
import { linkReducer } from "../slices/links-slice";
import { ingredientsReducer } from "../slices/ingredient-slice";
import { orderReducer } from "../slices/order-slice";
import { userReducer } from "../slices/user-slice";

const rootReducer = combineReducers({
  burger: burgerReducer,
  counter: counterReducer,
  data: dataReducer,
  link: linkReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  user: userReducer,
});

export default rootReducer;
