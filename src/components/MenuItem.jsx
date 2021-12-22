import PropTypes from 'prop-types';
import React from 'react';

export default function MenuItem({ text, icon, link }) {
  const item = (
    <li>
      <button type="button">
        {text}
        {icon}
      </button>
    </li>
  );

  const itemLink = (
    <li>
      <a href={ link } target="_blank" rel="noopener noreferrer">
        <button type="button">
          {text}
          {icon}
        </button>
      </a>
    </li>
  );

  return link ? item : itemLink;
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
