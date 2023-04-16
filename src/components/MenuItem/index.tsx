import React from 'react';
import MenuItemProps from './interfaces';

export default function MenuItem({ text, icon, link, onClick }: MenuItemProps) {
  const item = (
    <li>
      <button type="button" onClick={onClick}>
        {text}
        {icon}
      </button>
    </li>
  );

  const itemLink = (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button type="button" onClick={onClick}>
          {text}
          {icon}
        </button>
      </a>
    </li>
  );

  return link ? itemLink : item;
}
