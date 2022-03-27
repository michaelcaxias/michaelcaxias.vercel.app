import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [modalData, setModalData] = useState({
    title: 'Titulo do Projeto',
  });
  const [isOpen, setOpen] = useState(false);

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
    isOpen,
    setOpen,
    handleOpen,
    handleClose,
    modalData,
    setModalData,
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
