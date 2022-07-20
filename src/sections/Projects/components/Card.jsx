import React from 'react';

export default function Card() {
  return (
    <section className="project-card" data-aos="zoom-in">
      <figure>
        <img
          src="http://mattfarley.ca/img/projects/wfdesignbuild.png"
          alt="trybe schedule"
        />
        <figcaption>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </figcaption>
        <div className="overlay" />
      </figure>
    </section>
  );
}
