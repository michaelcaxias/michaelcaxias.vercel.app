import React from 'react';
import { MdWbSunny } from 'react-icons/md';

export default function Header() {
  return (
    <header>
      <nav>
        <MdWbSunny />
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#technologies">Tecnologias</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
