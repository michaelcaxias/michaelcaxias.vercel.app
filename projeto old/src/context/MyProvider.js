import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// DONE

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const setOrCreateThemeStorage = () => {
      const darkModeStorage = JSON.parse(localStorage.getItem('darkMode'));
      if (darkModeStorage === null) localStorage.setItem('darkMode', darkMode);
      return setDarkMode(darkModeStorage);
    };
    setOrCreateThemeStorage();
  }, [darkMode]);

  const context = {
    darkMode,
    setDarkMode,
    handleOpen,
    handleClose,
  };

  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
