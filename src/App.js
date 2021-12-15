import React from 'react';
import GlobalStyle from './styles/globalStyle';
import About from './sections/About';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';

function App() {
  return (
    <>
      <GlobalStyle />
      <About />
      <Contact />
      <Projects />
      <Technologies />
    </>
  );
}

export default App;
