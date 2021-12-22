import React from 'react';

import { MdContentCopy } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { BiExit } from 'react-icons/bi';
import { AiFillLinkedin, AiFillGithub, AiOutlineShareAlt } from 'react-icons/ai';

import useContextMenu from '../hooks/useContextMenu';
import { MenuStyle } from '../styles/index';

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  return show && (
    <MenuStyle style={ { top: anchorPoint.y, left: anchorPoint.x } }>
      <li>
        <button type="button">
          Compartilhar
          <AiOutlineShareAlt />
        </button>
      </li>
      <li>
        <button type="button">
          Atualizar
          <HiOutlineRefresh />
        </button>
      </li>
      <li>
        <button type="button">
          Copiar
          <MdContentCopy />
        </button>
      </li>
      <hr />
      <li>
        <button type="button">
          Sair
          <BiExit />
        </button>
      </li>
      <hr />
      <li>
        <button type="button">
          Abrir Linkedin
          <AiFillLinkedin />
        </button>
      </li>
      <li>
        <button type="button">
          Abrir GitHub
          <AiFillGithub />
        </button>
      </li>
    </MenuStyle>
  );
};

export default Menu;
