import React from 'react';
import { ButtonPrimary, ButtonSecondary } from '../../../styles/index';
import example from '../../../images/example.png';

export default function Card() {
  return (
    <section className="card">
      <section
        className="card-heading"
        style={ { backgroundImage: `url(${example})` } }
      >
        <h2>Titulo do Projeto</h2>
      </section>
      <section className="card-description">
        <p>
          Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
        <section className="buttons-group">
          <ButtonPrimary>Website</ButtonPrimary>
          <ButtonSecondary>Github</ButtonSecondary>
        </section>
      </section>
    </section>
  );
}
