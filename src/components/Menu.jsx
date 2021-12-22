import React from 'react';
import useContextMenu from '../hooks/useContextMenu';
import { MenuStyle } from '../styles/index';

const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  return show && (
    <MenuStyle style={ { top: anchorPoint.y, left: anchorPoint.x } }>
      <li>
        <button type="button">Compartilhar Link</button>
      </li>
      <li>
        <button type="button">Copiar</button>
      </li>
      <hr />
      <li>
        <button type="button">Atualizar</button>
      </li>
      <li>
        <button type="button">Sair</button>
      </li>
      <hr />
      <li>
        <button type="button">Abrir Linkedin</button>
      </li>
      <li>
        <button type="button">Abrir GitHub</button>
      </li>
    </MenuStyle>
  );
};

export default Menu;
