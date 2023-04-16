import React from 'react';
import TechCardProps from './techcard.interfaces';

export default function TechCard({ title, iconOne, iconTwo }: TechCardProps) {
  return (
    <section className="tech-card" data-aos="fade-up">
      <h2>{title}</h2>
      <section className="icons-card">
        {iconOne}
        {iconTwo}
      </section>
    </section>
  );
}
