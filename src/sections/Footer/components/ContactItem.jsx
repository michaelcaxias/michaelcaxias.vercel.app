import PropTypes from 'prop-types';
import React from 'react';

export default function ContactItem({ icon, text }) {
  return (
    <li>
      {icon}
      {text}
    </li>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
