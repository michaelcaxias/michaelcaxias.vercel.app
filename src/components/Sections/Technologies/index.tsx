import React from 'react';

import { FaReact, FaDocker, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiCypress, SiJest } from 'react-icons/si';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiGit } from 'react-icons/di';

import TechnologiesStyle from './styles';
import TechCard from './components/TechCard';

export default function Technologies() {
  return (
    <TechnologiesStyle id="technologies">
      <h1 data-aos="fade-up">Ferramentas e Tecnologias</h1>
      <section className="cards-tech">
        <TechCard
          title="React e Redux"
          iconOne={ <FaReact /> }
          iconTwo={ <SiRedux /> }
        />
        <TechCard
          title="HTML5 e CSS3"
          iconOne={ <AiFillHtml5 /> }
          iconTwo={ <DiCss3 /> }
        />
        <TechCard
          title="JavaScript"
          iconOne={ <SiJavascript /> }
        />
        <TechCard
          title="Jest e Cypress"
          iconOne={ <SiJest /> }
          iconTwo={ <SiCypress /> }
        />
        <TechCard
          title="Git e GitHub"
          iconOne={ <AiFillGithub /> }
          iconTwo={ <DiGit /> }
        />
        <TechCard
          title="Docker e Node"
          iconOne={ <FaDocker /> }
          iconTwo={ <FaNodeJs /> }
        />
      </section>
      <br />
    </TechnologiesStyle>
  );
}
