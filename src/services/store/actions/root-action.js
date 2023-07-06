import { burgerActions } from "../slices/burger-slice";
import { dataActions } from "../slices/data-slice";
import { ingredientsActions } from "../slices/ingredient-slice";
import { linkActions } from "../slices/links-slice";
import { orderActions } from "../slices/order-slice";
import { userActions } from "../slices/user-slice";

const rootActions = {
  burger: burgerActions,
  data: dataActions,
  link: linkActions,
  ingredients: ingredientsActions,
  order: orderActions,
  user: userActions,
};

export default rootActions;
