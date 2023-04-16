import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { MyContext } from '@/context/MyProvider';
import Menu from '@/components/Menu';

import { dark, light } from '@/styles/theme';
import GlobalStyle from '@/styles/globals';
import About from '@/components/Sections/About';
import Projects from '@/components/Sections/Projects';

export default function Home() {
  const { darkMode } = useContext(MyContext);
  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Menu />
      <GlobalStyle />
      <About />
      <Projects />
    </ThemeProvider>
  );
}
