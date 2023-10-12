import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarItemWrapper = styled(Link)<{ active: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;
  text-decoration: none;
  color: ${(props: any) => (props.active ? 'rgb(233,65,91)' : 'var(--whiteish)')};
  transition: all 0.2s ease;

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 1px;
    background-color: rgb(208, 37, 72);
    box-shadow: 0 0 0.5rem 0.25rem rgb(233, 65, 91, 0.25);
    opacity: ${(props: any) => (props.active ? '1' : '0')};
    transition: all 0.2s ease;
  }

  &:hover,
  &.active {
    color: rgb(233, 65, 91);
    text-shadow: 0 0 0.25rem rgb(233, 65, 91);
  }

  @media screen and (max-width: 768px) {
    height: 4rem;
    background-color: #11052c;
    transition: all 0.2s ease;
  }
`;

export default NavbarItemWrapper;
