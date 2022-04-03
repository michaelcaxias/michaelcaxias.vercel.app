/* eslint-disable react/jsx-max-depth */
import React from 'react';

import { FiDownload } from 'react-icons/fi';

import AboutStyle from './styles/about';
import Header from './components/Header';

import { ButtonPrimary, ButtonSecondary } from '../../styles/index';

export default function About() {
  return (
    <AboutStyle id="about">
      <Header />
      <section className="hero-section">
        <section className="about">
          <section className="about-section">
            <h1>
              Olá, eu sou Michael,
              <br />
              Desenvolvedor Web
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              <br />
              sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
              <br />
              consequat sunt nostrud amet.
            </p>
            <section className="buttons-group">
              <a
                href="#projects"
              >
                <ButtonPrimary>
                  Projetos
                </ButtonPrimary>
              </a>

              <a
                href="https://br.linkedin.com/in/michaelcaxias"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonSecondary>
                  LinkedIn
                </ButtonSecondary>
              </a>
              <a
                href="curriculo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonSecondary className="curriculum-button">
                  CV
                  <FiDownload />
                </ButtonSecondary>
              </a>
            </section>
          </section>
          <section className="circle-picture" />
        </section>
      </section>
    </AboutStyle>
  );
}
