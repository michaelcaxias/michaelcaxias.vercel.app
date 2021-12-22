import React from 'react';
import ProjectsStyle from './styles/projects';
import Card from './components/Card';
import projectsData from '../../services/projects_data';

export default function Projects() {
  return (
    <ProjectsStyle>
      <h1>Projetos</h1>
      <section className="projects-cards">
        {projectsData && projectsData
          .map(({ image, title, description, github, website }) => (
            <Card
              key={ title }
              image={ image }
              title={ title }
              description={ description }
              github={ github }
              website={ website }
            />
          ))}
      </section>
      <br />
    </ProjectsStyle>
  );
}
