/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

import { ButtonPrimary, ButtonSecondary } from '../../../styles/index';
import { MyContext } from '../../../context/MyProvider';

export default function Card(props) {
  const { image, title, description, github, website } = props;
  const { handleOpen } = useContext(MyContext);
  return (
    <section
      className="card"
      data-aos="zoom-in"
    >
      <button
        className="invisible-button"
        type="button"
        onClick={ (e) => {
          if (e.target.nodeName !== 'BUTTON') {
            handleOpen();
          }
        } }
      >
        <section
          className="card-heading"
          style={ { backgroundImage: `url(${image})` } }
        >
          <h2>{title}</h2>
        </section>
        <section className="card-description">
          <p>
            {description}
          </p>
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
      </button>
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
