import { burgerActions } from "../slices/burger-slice";
import { dataActions } from "../slices/data-slice";
import { ingredientsActions } from "../slices/ingredient-slice";
import { orderActions } from "../slices/order-slice";
import { priceActions } from "../slices/price-slice";

const rootActions = {
  burger: burgerActions,
  data: dataActions,
  ingredients: ingredientsActions,
  order: orderActions,
  price: priceActions,
};

export default rootActions;
