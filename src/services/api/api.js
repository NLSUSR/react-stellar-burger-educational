import cookie from "../cookie/cookie";

const Api = class {
  #resource;
  #endpoints;
  #methods;
  #headers;
  #errors;
  constructor(object) {
    this.#resource = object.resource;
    this.#endpoints = object.endpoints;
    this.#methods = object.methods;
    this.#headers = object.headers;
    this.#errors = object.errors;
  }

  #checkError = (e) => {
    return e === 400
      ? this.#errors.badRequest
      : e === 401
      ? this.#errors.unauthorized
      : e === 403
      ? this.#errors.forbidden
      : e === 404
      ? this.#errors.notFound
      : e === 500
      ? this.#errors.internalServerError
      : null;
  };

  #checkResponse = (r) => {
    return r.ok
      ? Promise.resolve(r.json())
      : Promise.reject(`Ошибка: ${this.#checkError(r.status)}`);
  };

  #getHeadlines = (method, data) => {
    return {
      method: method,
      headers: this.#headers,
      body: JSON.stringify(data),
    };
  };

  #getEndpoints = (endpoints) => `${this.#resource + endpoints}`;

  #getRequest = async (endpoints, method, data) =>
    await fetch(
      this.#getEndpoints(endpoints),
      this.#getHeadlines(method, data)
    );

  #checkReceiving = async (endpoint, method, data) =>
    await this.#checkResponse(await this.#getRequest(endpoint, method, data));

  #sendRequest = async (endpoints, method, data) => {
    return await this.#checkReceiving(endpoints, method, data);
  };

  #refreshToken = async (data) => {
    return await this.#sendRequest(
      this.#endpoints.token,
      this.#methods.post,
      data
    );
  };

  #requestWithRefresh = async (endpoint, method, data) => {
    try {
      const response = await this.#getRequest(endpoint, method, data);
      return await this.#checkResponse(response);
    } catch (e) {
      if (e.message === "jwt expired") {
        const refreshData = await this.#refreshToken({
          token: cookie.get("refresh"),
        });

        if (!refreshData.success) {
          return this.responseError(refreshData);
        }

        cookie.set("refresh", refreshData.refreshToken);
        cookie.set("token", refreshData.accessToken);

        const response = await this.#sendRequest(endpoint, method, data);
        return await this.#checkResponse(response);
      } else {
        return this.responseError(e);
      }
    }
  };

  responseError = (e) => console.error(e);

  getData = async () => {
    return await this.#sendRequest(
      this.#endpoints.ingredients,
      this.#methods.get
    );
  };

  createOrder = async (array) => {
    return await this.#sendRequest(this.#endpoints.orders, this.#methods.post, {
      ingredients: array,
    });
  };

  login = async (data) => {
    return await this.#sendRequest(
      this.#endpoints.login,
      this.#methods.post,
      data
    );
  };

  register = async (data) => {
    return await this.#sendRequest(
      this.#endpoints.register,
      this.#methods.post,
      data
    );
  };

  forgotPassword = async (data) => {
    return await this.#sendRequest(
      this.#endpoints.forgotPassword,
      this.#methods.post,
      data
    );
  };

  resetPassword = async (data) => {
    return await this.#sendRequest(
      this.#endpoints.resetPassword,
      this.#methods.post,
      data
    );
  };

  logout = async (data) => {
    return await this.#sendRequest(
      this.#endpoints.logout,
      this.#methods.post,
      data
    );
  };

  update = async (data) => {
    return await this.#requestWithRefresh(
      this.#endpoints.user,
      this.#methods.patch,
      data
    );
  };

  getUser = async () => {
    return await this.#requestWithRefresh(this.#endpoints.user, this.#methods.get);
  };
};

const API = new Api({
  resource: "https://norma.nomoreparties.space/api",
  endpoints: {
    ingredients: "/ingredients",
    orders: "/orders",
    login: "/auth/login",
    register: "/auth/register",
    forgotPassword: "/password-reset",
    resetPassword: "/password-reset/reset",
    logout: "/auth/logout",
    token: "/auth/token",
    user: "/auth/user",
  },
  methods: { get: "GET", post: "POST", patch: "PATCH" },
  headers: {
    authorization: cookie.get("token"),
    "content-type": "application/json",
  },
  errors: {
    badRequest: "400 Bad Request «неправильный, некорректный запрос»",
    unauthorized: "401 Unauthorized «не авторизован (не представился)»",
    forbidden: "403 Forbidden «запрещено (не уполномочен)»",
    notFound: "404 Not Found «не найдено»",
    internalServerError:
      "500 Internal Server Error «внутренняя ошибка сервера»",
  },
});

export default API;
