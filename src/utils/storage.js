const Storage = class {
  set = (name, array) => { sessionStorage.setItem(name, JSON.stringify(array)) };
  get = (name) => { return JSON.parse(sessionStorage.getItem(name)) };
  clear = () => { sessionStorage.clear() };
}

export const storage = new Storage();

