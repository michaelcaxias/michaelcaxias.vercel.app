/* eslint-disable react/jsx-max-depth */
import React from 'react';

import { FiDownload } from 'react-icons/fi';

import AboutStyle from './styles';
import Header from './components/Header';
import { ButtonPrimary, ButtonSecondary } from '@/styles/components';

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
              Sou apaixonado por tecnologia e automação de trabalhos manuais.
              <br />
              Diante disso, trabalho e invisto para que tecnologia cause
              <br />
              um impacto de forma positiva na vida das pessoas :).
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
          <section className="circle-picture">
            <img
              src="https://i.imgur.com/AvYei5s.png"
              alt="michael de cabelo cacheado sorrindo"
              draggable={ false }
            />
          </section>
        </section>
      </section>
    </AboutStyle>
  );
}
