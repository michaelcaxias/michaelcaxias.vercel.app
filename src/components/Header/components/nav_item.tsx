"use client";

import { PropsWithChildren, useMemo } from 'react';
import { LayoutNavItem } from '../style'
import { usePathname } from 'next/navigation';

interface NavItemProps {
  path: string;
}

const ACTIVE_CLASS = 'active';

export default function NavItem({ children, path }: PropsWithChildren<NavItemProps>) {
  const pathname = usePathname();

  return (
		<LayoutNavItem
      className={pathname === path ? ACTIVE_CLASS : ''}
      href={path}
    >
      {children}
    </LayoutNavItem>
  )
}
