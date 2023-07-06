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

  #checkSuccess = (response) => {
    return response && response.success
      ? Promise.resolve(response)
      : Promise.reject(`Ответ не success: ${response}`);
  };

  #getHeadlines = (method, data) => {
    return {
      method: method,
      headers: this.#headers,
      body: JSON.stringify(data),
    };
  };

  #getEndpoints = (endpoints) => `${this.#resource + endpoints}`;

  #getRequest = (endpoints, method, data) =>
    fetch(this.#getEndpoints(endpoints), this.#getHeadlines(method, data));

  #checkReceiving = (endpoint, method, data) =>
    this.#getRequest(endpoint, method, data)
      .then((response) => this.#checkResponse(response))
      .then((result) => this.#checkSuccess(result))
      .catch((e) => Promise.reject(e));

  #sendRequest = (endpoints, method, data) => {
    return this.#checkReceiving(endpoints, method, data).catch((e) => {
      this.#responseError(e);
    });
  };

  #refreshToken = (data) => {
    return this.#sendRequest(
      this.#endpoints.token,
      this.#methods.post,
      data
    ).catch((e) => {
      this.#responseError(e);
    });
  };

  #requestWithRefresh = (endpoint, method, data) => {
    return this.#getRequest(endpoint, method, data)
      .then((response) => this.#checkResponse(response))
      .then((result) => this.#checkSuccess(result))
      .catch((e) =>
        e.message !== "jwt expired"
          ? this.#responseError(e)
          : this.#refreshToken({
              token: cookie.get("refresh"),
            }).then(
              (refreshData) => (
                this.#sendRequest(endpoint, method, data).catch((e) => {
                  this.#responseError(e);
                }),
                cookie.set("refresh", refreshData.refreshToken),
                cookie.set("token", refreshData.accessToken),
                !refreshData.success ? this.#responseError(refreshData) : null
              )
            )
      );
  };

  #responseError = (e) => {
    throw e;
  };

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
    return await this.#requestWithRefresh(
      this.#endpoints.user,
      this.#methods.get
    );
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
