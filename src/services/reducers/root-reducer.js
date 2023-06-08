import { combineReducers } from "redux";
import { burgerReducer } from "../slices/burger-slice";
import { counterReducer } from "../slices/counter-slice";
import { dataReducer } from "../slices/data-slice";
import { ingredientsReducer } from "../slices/ingredient-slice";
import { orderReducer } from "../slices/order-slice";
import { priceReducer } from "../slices/price-slice";

const rootReducer = combineReducers({
  burger: burgerReducer,
  counter: counterReducer,
  data: dataReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  price: priceReducer,
});

export default rootReducer;
