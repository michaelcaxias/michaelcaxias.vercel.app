import PropTypes from 'prop-types';
import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../../../styles/index';

export default function Card(props) {
  const { image, title, description, github, website } = props;
  return (
    <section className="card">
      <section
        className="card-heading"
        style={ { backgroundImage: `url(${image})` } }
      >
        <h2>{title}</h2>
      </section>
      <section className="card-description">
        <p>{description}</p>
        <section className="buttons-group">
          <a href={ github } target="_blank" rel="noopener noreferrer">
            <ButtonSecondary>Github</ButtonSecondary>
          </a>
          <a href={ website } target="_blank" rel="noopener noreferrer">
            <ButtonPrimary>Website</ButtonPrimary>
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
