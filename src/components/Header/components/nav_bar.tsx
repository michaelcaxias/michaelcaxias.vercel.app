"use client";

import React, { PropsWithChildren } from 'react'
import { LayoutNavBar } from '../style'

export default function NavBar({ children }: PropsWithChildren) {
  return (
    <LayoutNavBar>{children}</LayoutNavBar>
  )
}
