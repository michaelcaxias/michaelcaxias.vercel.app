/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

// eslint-disable-next-line react/function-component-definition
export function MyProvider({ children }) {
  const [theme, setTheme] = useState(false);

  function createThemeLocalStorage() {
    localStorage.setItem('theme', theme);
  }

  function setOrCreateThemeStorage() {
    const themeStorage = JSON.parse(localStorage.getItem('theme'));
    if (!themeStorage) return createThemeLocalStorage();
    return setTheme(themeStorage);
  }

  useEffect(() => {
    setOrCreateThemeStorage();
  }, [setOrCreateThemeStorage]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MyContext.Provider value={ { theme, setTheme, setOrCreateThemeStorage } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
