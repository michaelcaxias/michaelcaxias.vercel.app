import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-bottom: ${(props) => props.theme.hr};
  border: 1px solid black;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(17, 17, 17, 0.75);
    backdrop-filter: blur(0.5rem);
    -webkit-backdrop-filter: blur(0.5rem);
    z-index: 20;
    transition: all 0.4s ease;

    ${(props) =>
      props.theme.lightMode &&
      `
      background-color: rgba(var(--primary-rgb), 0.25);
      border-bottom-color: var(--primary);
    `}
  }
`;

export const Navbar = styled.nav`
  display: flex;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default HeaderContainer;
