import PropTypes from "prop-types";

export const ingredients = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

export const burgerIngredientsCollections = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(ingredients.isRequired).isRequired,
};

export const appHeader = {
  states: PropTypes.shape({
    constructor: PropTypes.shape({
      type: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
    feed: PropTypes.shape({
      type: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
    profile: PropTypes.shape({
      type: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export const modal = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export const modalOverlay = {
  сlose: PropTypes.func,
};

export const orderDetails = {
  children: PropTypes.number.isRequired,
};

export const burgerConstructorBun = {
  bun: PropTypes.shape(ingredients.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  lock: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export const burgerConstructorInvoice = {
  click: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  button: PropTypes.string.isRequired,
};

export const burgerConstructorItem = {
  item: PropTypes.shape(ingredients.isRequired).isRequired,
  index: PropTypes.number.isRequired,
};

export const burgerConstructorRecipe = {
  array: PropTypes.arrayOf(ingredients.isRequired).isRequired,
};

export const burgerIngredientsItem = {
  item: PropTypes.shape(ingredients.isRequired).isRequired,
};

export const burgerIngredientsMenu = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  current: PropTypes.string.isRequired,
};

export const headerLinks = {
  element: PropTypes.shape({
    class: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
};

export const form = {
  buttons: PropTypes.shape({
    reset: PropTypes.shape({
      name: PropTypes.string,
      reset: PropTypes.func,
      state: PropTypes.string,
    }),
    submit: PropTypes.shape({
      name: PropTypes.string,
      state: PropTypes.string,
      submit: PropTypes.func,
    }),
  }),
  code: PropTypes.shape({
    icon: PropTypes.bool,
    placeholder: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string,
  }),
  email: PropTypes.shape({
    icon: PropTypes.bool,
    placeholder: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string,
  }),
  name: PropTypes.shape({
    icon: PropTypes.bool,
    placeholder: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string,
  }),
  password: PropTypes.shape({
    icon: PropTypes.bool,
    placeholder: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string,
  }),
};

export const identification = {
  buttons: form.buttons,
  inputs: PropTypes.shape({
    code: form.code,
    email: form.email,
    name: form.name,
    password: form.password,
  }),
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.string,
      link: PropTypes.string,
      question: PropTypes.string,
    })
  ),
};

export const profileLinks = {
  message: PropTypes.string.isRequired,
};

export const protectedRoute = {
  unauthorized: PropTypes.bool.isRequired,
  element: PropTypes.element.isRequired,
};

export const authorized = { element: PropTypes.element.isRequired };
export const unauthorized = { element: PropTypes.element.isRequired };

export const ingredientDetails = {
  styles: PropTypes.shape({
    container: PropTypes.shape({
      background: PropTypes.string,
      border: PropTypes.number,
      boxShadow: PropTypes.string,
    }),
    title: PropTypes.shape({
      margin: PropTypes.number,
      textAlign: PropTypes.string,
    }),
  }),
};
