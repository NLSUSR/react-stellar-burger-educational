const Api = class {
  #resource;
  #endpoints;
  #methods;
  #headers;
  constructor(object) {
    this.#resource = object.resource;
    this.#endpoints = object.endpoints;
    this.#methods = object.methods;
    this.#headers = object.headers;
  }

  #checkResponse = (response) => {
    return response.ok
      ? Promise.resolve(response.json())
      : Promise.reject(`Ошибка: ${response.status}`);
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

  responseError = (error) => console.error(error);
};

const API = new Api({
  resource: "https://norma.nomoreparties.space/api",
  endpoints: { ingredients: "/ingredients", orders: "/orders" },
  methods: { get: "GET", post: "POST" },
  headers: { "content-type": "application/json" },
});

export default API;
