import React, { useContext, useState } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { MyContext } from '../../../context/MyProvider';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(MyContext);
  const [isOpen, toggleOpen] = useState(false);

  const changeTheme = () => {
    setDarkMode((previousTheme) => !previousTheme);
    localStorage.setItem('darkMode', !darkMode);
  };

  const toggleMenu = () => {
    toggleOpen(!isOpen);
  };

  return (
    <header className={ isOpen && 'open' }>
      <nav className="nav-menu">
        <button type="button" onClick={ () => changeTheme() }>
          {darkMode ? <MdWbSunny /> : <IoMdMoon />}
        </button>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#technologies">Tecnologias</a>
        <a href="#contact">Contato</a>
      </nav>
      <button
        className={ isOpen ? 'mobile-menu open' : 'mobile-menu' }
        type="button"
        onClick={ () => toggleMenu() }
      >
        <div className="menu-bar" />
      </button>
    </header>
  );
}
