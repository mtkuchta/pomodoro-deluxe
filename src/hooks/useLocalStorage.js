export const useLocalStorage = () => {
  const saveDataInStorage = (name, data) => {
    window.localStorage.setItem(`${name}`, JSON.stringify(data));
  };

  const getDataFromStorage = (name) => {
    return JSON.parse(window.localStorage.getItem(name));
  };

  return {
    saveDataInStorage,
    getDataFromStorage,
  };
};
