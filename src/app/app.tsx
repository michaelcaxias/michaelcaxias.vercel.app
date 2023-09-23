"use client";
import { Content, LayoutWrapper } from "@/styles/layout";
import { PropsWithChildren } from "react";
import Header from "@/components/Header";

export default function App({ children }: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <Content>
        <Header />
        {children}
      </Content>
    </LayoutWrapper>
  )
}
