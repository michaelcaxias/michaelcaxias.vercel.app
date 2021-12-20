import React, { useContext } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { MyContext } from '../../../context/MyProvider';

export default function Header() {
  const { theme, setTheme } = useContext(MyContext);

  const changeTheme = () => {
    setTheme((previousTheme) => !previousTheme);
    localStorage.setItem('theme', !theme);
  };

  return (
    <header>
      <nav id="menu">
        <button type="button" onClick={ () => changeTheme() }>
          <MdWbSunny />
        </button>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#technologies">Tecnologias</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
