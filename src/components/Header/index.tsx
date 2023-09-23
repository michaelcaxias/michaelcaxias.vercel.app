"use client";

import LayoutHeader from "./style";
import NavItem from "./components/nav_item";
import NavBar from "./components/nav_bar";

export default function Header() {
	return (
		<LayoutHeader>
			<NavBar>
				<NavItem path="/">Home</NavItem>
				<NavItem path="/projects">Projetos</NavItem>
				<NavItem path="/me">Sobre mim</NavItem>
			</NavBar>
		</LayoutHeader>
	)
}
