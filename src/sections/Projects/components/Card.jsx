import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

import { ButtonPrimary, ButtonSecondary } from '../../../styles/index';

export default function Card(props) {
  const { image, title, description, github, website } = props;
  const [isOpen, handleOpen] = useState(false);
  return (
    <section
      className="card"
      data-aos="zoom-in"
    >
      <button
        className="invisible-button"
        type="button"
        onClick={ () => handleOpen((prevState) => !prevState) }
      >
        <section
          className="card-heading"
          style={ { backgroundImage: `url(${image})` } }
        >
          <h2>{title}</h2>
        </section>
      </button>
      <section className="card-description">
        <button
          className="invisible-button"
          type="button"
          onClick={ () => handleOpen((prevState) => !prevState) }
        >
          <p>
            {description}
          </p>
        </button>
        <section className="buttons-group">
          <a href={ github } target="_blank" rel="noopener noreferrer">
            <ButtonSecondary>
              Github
              <AiFillGithub />
            </ButtonSecondary>
          </a>
          <a href={ website } target="_blank" rel="noopener noreferrer">
            <ButtonPrimary>
              Website
              <CgWebsite />
            </ButtonPrimary>
          </a>
        </section>
      </section>
    </section>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};
