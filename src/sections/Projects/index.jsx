import React from 'react';
import { BsArrowRightSquare } from 'react-icons/bs';
import ProjectsStyle from './styles/projects';
import Card from './components/Card';
import projectsData from '../../services/projects_data';

export default function Projects() {
  return (
    <ProjectsStyle id="projects">
      <h1 data-aos="fade-up">Projetos</h1>
      <section className="projects-cards">
        {projectsData && projectsData
          .map(({ image, title, description, github, website, modalInfo }) => (
            <Card
              key={ title }
              image={ image }
              title={ title }
              description={ description }
              github={ github }
              website={ website }
              modalInfo={ modalInfo }
            />
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
