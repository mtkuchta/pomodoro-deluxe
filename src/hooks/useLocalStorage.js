export const useLocalStorage = () => {
  const saveDataInStorage = (name, data) => {
    localStorage.setItem(`${name}`, JSON.stringify(data));
  };

  const getDataFromStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
  };

  return {
    saveDataInStorage,
    getDataFromStorage,
  };
};
