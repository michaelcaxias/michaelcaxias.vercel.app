import { ThemeProvider } from 'styled-components';
import { Title, Wrapper } from './_styles';
import { dark, light } from '@/styles/theme';

export default function Home() {
  return (
    <ThemeProvider theme={ darkMode ? dark : light }>
      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
    </ThemeProvider>
  );
}
