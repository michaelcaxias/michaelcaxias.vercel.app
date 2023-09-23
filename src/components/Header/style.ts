import Link from "next/link";
import { styled } from "styled-components";

const LayoutHeader = styled.header`
	align-items: center;
	border-bottom: 1px solid rgba(255,255,255,.1);
	display: flex;
	position: relative;
	width: 100%;
`;

export default LayoutHeader;

export const LayoutNavBar = styled.nav`
	margin-left: auto;
	display: flex;
`;

export const LayoutNavItem = styled(Link)`
	align-items: center;
	color: #ffffffbf;
	cursor: pointer;
	display: flex;
	height: 5rem;
	justify-content: center;
	padding: 0 1rem;
	position: relative;
	text-decoration: none;
	transition: all .2s ease;

	&.active {
		color: rgb(102,217,162);
		text-shadow: 0 0 0.25rem rgb(102,217,162);
	}

	&.active::before {
		opacity: 1;
	}

	&:hover {
		color: rgb(102,217,162);
		text-shadow: 0 0 0.25rem rgb(102,217,162);
	}

	&::before {
		background-color: rgb(102,217,162);
		bottom: -1px;
    content: "";
		height: 1px;
		left: 0;
		opacity: 0;
		position: absolute;
		box-shadow: 0 0 0.5rem 0.25rem rgba(66,184,131, .25);
		transition: all .2s ease;
		width: 100%;
		z-index: 1;
	}
`;
