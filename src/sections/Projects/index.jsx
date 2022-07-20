/* eslint-disable react/no-multi-comp */
import React from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import ProjectsStyle from './styles/projects';
import Card from './components/Card';

export default function Projects() {
  return (
    <ProjectsStyle id="projects">
      <h1 data-aos="fade-up">Projetos</h1>
      <section className="projects-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <a
        href="https://github.com/michaelcaxias?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="see-more-projects"
      >
        Ver mais
        <BsArrowRightSquare />
      </a>
    </ProjectsStyle>
  );
}
