import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarItemWrapper from './styles';

const NavbarItem = ({ to, children }: PropsWithChildren<{ to: string }>) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavbarItemWrapper to={to} active={isActive}>
      {children}
    </NavbarItemWrapper>
  );
};

export default NavbarItem;
