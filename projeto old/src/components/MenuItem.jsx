import PropTypes from 'prop-types';
import React from 'react';

// DONE

export default function MenuItem({ text, icon, link, onClick }) {
  const item = (
    <li>
      <button type="button" onClick={ onClick }>
        {text}
        {icon}
      </button>
    </li>
  );

  const itemLink = (
    <li>
      <a href={ link } target="_blank" rel="noopener noreferrer">
        <button type="button" onClick={ onClick }>
          {text}
          {icon}
        </button>
      </a>
    </li>
  );

  return link ? itemLink : item;
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
