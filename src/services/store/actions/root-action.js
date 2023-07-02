import { burgerActions } from "../slices/burger-slice";
import { counterActions } from "../slices/counter-slice";
import { dataActions } from "../slices/data-slice";
import { ingredientsActions } from "../slices/ingredient-slice";
import { linkActions } from "../slices/links-slice";
import { orderActions } from "../slices/order-slice";
import { userActions } from "../slices/user-slice";

const rootActions = {
  burger: burgerActions,
  counter: counterActions,
  data: dataActions,
  link: linkActions,
  ingredients: ingredientsActions,
  order: orderActions,
  user: userActions,
};

export default rootActions;
