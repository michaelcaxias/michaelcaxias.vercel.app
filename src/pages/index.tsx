import { ThemeProvider } from 'styled-components';
import { Title, Wrapper } from './_styles';
import { dark, light } from '@/styles/theme';
import { useContext } from 'react';
import { MyContext } from '@/context/MyProvider';

export default function Home() {
  const { darkMode } = useContext(MyContext);
  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
    </ThemeProvider>
  );
}
