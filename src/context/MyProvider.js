import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const setOrCreateThemeStorage = () => {
      const darkModeStorage = JSON.parse(localStorage.getItem('darkMode'));
      if (!darkModeStorage) localStorage.setItem('darkMode', darkMode);
      return setDarkMode(darkModeStorage);
    };
    setOrCreateThemeStorage();
  }, [darkMode]);

  const context = {
    darkMode,
    setDarkMode,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
