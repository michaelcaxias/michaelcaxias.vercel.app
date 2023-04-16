import React from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import ProjectsStyle from './styles';
import Card from './components/Card';
import projectsData from '@/services/projects_data';

export default function Projects() {
  return (
    <ProjectsStyle id="projects">
      <h1 data-aos="fade-up">Projetos</h1>
      <section className="projects-cards">
        {projectsData.map((project) => (
          <Card {...project} key={project.title} />
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
