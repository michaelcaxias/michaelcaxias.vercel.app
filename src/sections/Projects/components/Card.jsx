import React from 'react';

export default function Card() {
  return (
    <section className="project-card" data-aos="zoom-in">
      <figure>
        <img src="assets/img/compliance-station-saas.png" alt="compliance station saas" />
        <figcaption>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </figcaption>
        <div className="overlay" />
      </figure>
    </section>
  );
}
