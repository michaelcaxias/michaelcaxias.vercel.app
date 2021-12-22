import React from 'react';

import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

import TechnologiesStyle from './styles/technologies';
import TechCard from './components/TechCard';

export default function Technologies() {
  return (
    <TechnologiesStyle>
      <h1>Ferramentas e Tecnologias</h1>
      <section className="cards-tech">
        <TechCard title="React e Redux" iconOne={ <FaReact /> } iconTwo={ <SiRedux /> } />
        <TechCard title="React e Redux" iconOne={ <FaReact /> } iconTwo={ <SiRedux /> } />
        <TechCard title="React e Redux" iconOne={ <FaReact /> } iconTwo={ <SiRedux /> } />
        <TechCard title="React e Redux" iconOne={ <FaReact /> } iconTwo={ <SiRedux /> } />
        <TechCard title="React e Redux" iconOne={ <FaReact /> } iconTwo={ <SiRedux /> } />
        <TechCard title="React e Redux" iconOne={ <FaReact /> } iconTwo={ <SiRedux /> } />
      </section>
    </TechnologiesStyle>
  );
}
