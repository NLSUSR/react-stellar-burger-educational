const keys = {
  names: { buns: "Булки", sauces: "Соусы", mains: "Начинки" },
};

const profileInputs = {
  name: {
    state: "enabled",
    type: "text",
    placeholder: "Имя",
    icon: true,
  },
  email: {
    state: "enabled",
    type: "email",
    placeholder: "Логин",
    icon: true,
  },
  password: {
    state: "enabled",
    inputDisabled: true,
    type: "password",
    placeholder: "Пароль",
    icon: true,
  },
};

const loginData = {
  title: "Вход",
  inputs: {
    email: {
      state: "enabled",
      type: "email",
      placeholder: "E-mail",
    },
    password: {
      state: "enabled",
      type: "password",
      placeholder: "Пароль",
    },
  },
  questions: [
    {
      question: "Вы — новый пользователь?",
      action: "Зарегистрироваться",
      link: "/register",
    },
    {
      question: "Забыли пароль?",
      action: "Восстановить пароль",
      link: "/forgot-password",
    },
  ],
};

const forgotPasswordData = {
  title: "Восстановление пароля",
  inputs: {
    email: {
      state: "enabled",
      type: "email",
      placeholder: "Укажите e-mail",
    },
  },
  questions: [
    { question: "Вспомнили пароль?", action: "Войти", link: "/login" },
  ],
};

const registerData = {
  title: "Регистрация",
  inputs: {
    name: {
      state: "enabled",
      type: "text",
      placeholder: "Имя",
    },
    email: {
      state: "enabled",
      type: "email",
      placeholder: "E-mail",
    },
    password: {
      state: "enabled",
      type: "password",
      placeholder: "Пароль",
    },
  },
  questions: [
    {
      question: "Уже зарегистрированы?",
      action: "Войти",
      link: "/login",
    },
  ],
};

const resetPasswordData = {
  title: "Восстановление пароля",
  inputs: {
    password: {
      state: "enabled",
      name: "password",
      type: "password",
      placeholder: "Введите новый пароль",
    },
    code: {
      state: "enabled",
      type: "text",
      placeholder: "Введите код из письма",
    },
  },
  questions: [
    { question: "Вспомнили пароль?", action: "Войти", link: "/login" },
  ],
};

const messages = {
  profile: "В этом разделе вы можете \u00A0 изменить свои персональные данные",
  history: "В этом разделе вы можете просмотреть свою историю заказов",
  logout: "В этом разделе вы можете выйти из профиля",
};

const switcher = (item) => {
  return item === true
    ? { type: "primary", state: "active" }
    : item === false
    ? { type: "secondary", state: "inactive" }
    : null;
};

const constants = {
  types: require("../utils-for-application/prop-types"),
  keys,
  profileInputs,
  loginData,
  forgotPasswordData,
  registerData,
  resetPasswordData,
  messages,
  switcher,
};

export default constants;
