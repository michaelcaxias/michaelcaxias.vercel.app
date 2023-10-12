import Item from "./Item";
import HeaderContainer, { Navbar } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <Item to="/blog">Blog</Item>
        <Item to="/me">Sobre mim</Item>
        <Item to="/projects">Projetos</Item>
      </Navbar>
    </HeaderContainer>
  );
}
