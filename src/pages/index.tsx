import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { MyContext } from '@/context/MyProvider';

import Menu from '@/components/Menu';
import About from '@/components/Sections/About';
import Projects from '@/components/Sections/Projects';
import Technologies from '@/components/Sections/Technologies';
import Footer from '@/components/Sections/Footer';

import { dark, light } from '@/styles/theme';
import { GlobalStyle } from '@/styles/globals';
import Head from 'next/head';

export default function Home() {
  const { darkMode } = useContext(MyContext);
  return (
    <>
      <Head>
        <title>Michael Caxias</title>
      </Head>
      <ThemeProvider theme={darkMode ? dark : light}>
        <Menu />
        <GlobalStyle />
        <About />
        <Projects />
        <Technologies />
        <Footer />
      </ThemeProvider>
    </>
  );
}
