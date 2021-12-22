import React from 'react';

import { MdContentCopy } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { BiExit } from 'react-icons/bi';
import { AiFillLinkedin, AiFillGithub, AiOutlineShareAlt } from 'react-icons/ai';

import useContextMenu from '../hooks/useContextMenu';
import { MenuStyle } from '../styles/index';
import MenuItem from './MenuItem';

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  return show && (
    <MenuStyle style={ { top: anchorPoint.y, left: anchorPoint.x } }>
      <MenuItem text="Compartilhar" icon={ <AiOutlineShareAlt /> } />
      <MenuItem text="Atualizar" icon={ <HiOutlineRefresh /> } />
      <MenuItem text="Copiar" icon={ <MdContentCopy /> } />
      <MenuItem text="Sair" icon={ <BiExit /> } />
      <MenuItem text="Abrir Linkedin" icon={ <AiFillLinkedin /> } />
      <MenuItem text="Abrir GitHub" icon={ <AiFillGithub /> } />
    </MenuStyle>
  );
};

export default Menu;
