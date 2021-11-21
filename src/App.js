import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { ButtonPrimary, ButtonSecondary } from './styles/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Apenas iniciando</h1>
      <ButtonPrimary>Projetos</ButtonPrimary>
      <ButtonSecondary>Linkedin</ButtonSecondary>
      <ButtonSecondary>CV</ButtonSecondary>
    </>
  );
}

export default App;
