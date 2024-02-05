const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

const saveLocalStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, value);
};

const removeLocalStorage = (key: string) => {
  if (!getLocalStorage(key)) return;
  window.localStorage.removeItem(key);
};
export { getLocalStorage, saveLocalStorage, removeLocalStorage };
