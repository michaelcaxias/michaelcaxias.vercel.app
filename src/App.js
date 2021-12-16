import React from 'react';
import GlobalStyle from './styles/global';
import About from './sections/About/index';
import Contact from './sections/Contact/index';
import Projects from './sections/Projects/index';
import Technologies from './sections/Technologies/index';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}
