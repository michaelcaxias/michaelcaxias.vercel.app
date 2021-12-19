/* eslint-disable react/jsx-max-depth */
import React from 'react';

import { IoDocumentTextOutline } from 'react-icons/io5';

import AboutStyle from './styles/about';
import Header from './components/Header';

import { ButtonPrimary, ButtonSecondary } from '../../styles/index';

export default function About() {
  return (
    <AboutStyle>
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
                <IoDocumentTextOutline />
              </ButtonSecondary>
            </section>
          </section>
          <section className="circle-picture" />
        </section>
      </section>
    </AboutStyle>
  );
}
