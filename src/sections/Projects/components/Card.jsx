import PropTypes from 'prop-types';
import React from 'react';

export default function Card({ description, image }) {
  return (
    <section className="project-card" data-aos="zoom-in">
      <figure>
        <img src={ image } alt="compliance station saas" />
        <figcaption>
          <h3>{description}</h3>
        </figcaption>
        <div className="overlay" />
      </figure>
    </section>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
