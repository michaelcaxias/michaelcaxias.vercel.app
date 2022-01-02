import PropTypes from 'prop-types';
import React from 'react';

export default function TechCard({ title, iconOne, iconTwo }) {
  return (
    <section className="tech-card">
      <h2>{title}</h2>
      <section className="icons-card">
        {iconOne}
        {iconTwo}
      </section>
    </section>
  );
}

TechCard.propTypes = {
  iconOne: PropTypes.node.isRequired,
  iconTwo: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
