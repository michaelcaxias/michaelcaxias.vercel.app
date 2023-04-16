import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface CardProps {
  description: string;
  image: string;
  website: string;
}


export default function Card({ description, image, website }: CardProps) {
  return (
    <section className="project-card" data-aos="zoom-in">
      <figure>
        <img src={image} alt="compliance station saas" />
        <figcaption>
          <h3>{description}</h3>
          <a href={website} target="_blank" rel="noreferrer">
            Visitar
            <IoIosArrowForward />
          </a>
        </figcaption>
        <div className="overlay" />
      </figure>
    </section>
  );
}
