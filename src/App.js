import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import About from './sections/About/index';
import Contact from './sections/Contact/index';
import Projects from './sections/Projects/index';
import Technologies from './sections/Technologies/index';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </BrowserRouter>
  );
}
