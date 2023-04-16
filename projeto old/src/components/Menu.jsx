import React from 'react';

import { MdContentCopy } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub, AiOutlineShareAlt } from 'react-icons/ai';

import useContextMenu from '../hooks/useContextMenu';
import { MenuStyle } from '../styles/index';
import MenuItem from './MenuItem';

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  const refreshPage = () => {
    window.location.reload();
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const copyToClipboard = () => {
    const text = window.getSelection().toString();
    navigator.clipboard.writeText(text);
  };

  return show && (
    <MenuStyle style={ { top: anchorPoint.y, left: anchorPoint.x } }>
      <MenuItem
        text="Compartilhar"
        icon={ <AiOutlineShareAlt /> }
        onClick={ copyLinkToClipboard }
      />
      <MenuItem
        text="Atualizar"
        onClick={ refreshPage }
        icon={ <HiOutlineRefresh /> }
      />
      <MenuItem
        text="Copiar"
        icon={ <MdContentCopy /> }
        onClick={ copyToClipboard }
      />
      <MenuItem
        text="Abrir Linkedin"
        icon={ <AiFillLinkedin /> }
        link="https://github.com/michaelcaxias"
      />
      <MenuItem
        text="Abrir GitHub"
        icon={ <AiFillGithub /> }
        link="https://br.linkedin.com/in/michaelcaxias"
      />
    </MenuStyle>
  );
};

export default Menu;
