const Storage = class {
  public set = (name: string, array: any[]): void => {
    sessionStorage.setItem(name, JSON.stringify(array));
  };
  public get = (name: string): void => {
    return JSON.parse(sessionStorage.getItem(name) || "[]");
  };
  public clear = (): void => {
    sessionStorage.clear();
  };
  public length = (): number => {
    return sessionStorage.length;
  };
};

const storage = new Storage();

export default storage;

