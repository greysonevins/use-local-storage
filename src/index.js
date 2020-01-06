import { useState } from "react";

export function useLocalStorage(key, initialValue) {

  const [storeIniitalValue] = useState(initialValue)
  const [localStorage, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(localStorage) : value;


      valueToStore === null ? setValue(storeIniitalValue) : setValue(valueToStore);

      valueToStore === null
        ? window.localStorage.removeItem(key)
        : window.localStorage.setItem(key, JSON.stringify(valueToStore));





    } catch (e) {
      console.log(e);
    }
  };
  return [localStorage, setLocalStorage];
}
