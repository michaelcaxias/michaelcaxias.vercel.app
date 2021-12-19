/* eslint-disable react/jsx-max-depth */
import React from 'react';

import AboutStyle from './styles/about';
import Header from './components/Header';

import { ButtonPrimary, ButtonSecondary } from '../../styles/index';

export default function About() {
  return (
    <AboutStyle>
      <Header />
      <section>
        Image
        <section>
          <h1>
            Olá, eu sou Michael,
            Desenvolvedor Web
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
          <section>
            <ButtonPrimary>
              Projetos
            </ButtonPrimary>
            <a
              href="https://br.linkedin.com/in/michaelcaxias"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonSecondary>
                LinkedIn
              </ButtonSecondary>
            </a>
            <ButtonSecondary>
              CV
            </ButtonSecondary>
          </section>
        </section>
      </section>
    </AboutStyle>
  );
}
