import PropTypes from 'prop-types';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

export default function Card({ description, image }) {
  return (
    <section className="project-card" data-aos="zoom-in">
      <figure>
        <img src={ image } alt="compliance station saas" />
        <figcaption>
          <h3>{description}</h3>
          <button type="button">
            Visitar
            <IoIosArrowForward />
          </button>
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
