import React from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import ProjectsStyle from './styles';
import Card from './components/Card';
import projects_data from '@/services/projects_data';

export default function Projects() {
  return (
    <ProjectsStyle id="projects">
      <h1 data-aos="fade-up">Projetos</h1>
      <section className="projects-cards">
        {projects_data.map((project, i) => (
          <Card {...project} key={i} />
        ))}
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
