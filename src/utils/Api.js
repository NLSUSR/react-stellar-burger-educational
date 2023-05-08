const Api = class {
  #resource;
  constructor(object) {
    this.#resource = object.resource;
  };

  #checkResponse = response => {
    return response.ok
      ? Promise.resolve(response.json())
      : Promise.reject(`Ошибка: ${response.status}`);
  };

  responseError = error => console.error(error);

  getData = async () => {
    const response = await fetch(this.#resource);
    return this.#checkResponse(response);
  };

}

export const api = new Api({
  resource: "https://norma.nomoreparties.space/api/ingredients",
});