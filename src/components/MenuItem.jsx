import PropTypes from 'prop-types';
import React from 'react';

export default function MenuItem({ text, icon }) {
  return (
    <li>
      <button type="button">
        {text}
        {icon}
      </button>
    </li>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
