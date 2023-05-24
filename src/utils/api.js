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

  responseError = (error) => console.error(error);

  getData = async () => {
    const response = await fetch(
      `${this.#resource + this.#endpoints.ingredients}`
    );
    return await this.#checkResponse(response);
  };

  createOrder = async (array) => {
    const response = await fetch(`${this.#resource + this.#endpoints.orders}`, {
      method: this.#methods.post,
      headers: this.#headers,
      body: JSON.stringify({ ingredients: array }),
    });
    return await this.#checkResponse(response);
  };
};

const API = new Api({
  resource: "https://norma.nomoreparties.space/api",
  endpoints: { ingredients: "/ingredients", orders: "/orders" },
  methods: { post: "POST" },
  headers: { "content-type": "application/json" },
});

export default API;
