import React, { useState } from "react";
import SideMenu from "./Burger";

import styled from "styled-components";

const Ul = styled.ul`
	margin: 0;
	padding: 0;
	text-align: left;
	display: flex;
	flex-flow: row wrap;
	li {
		margin-right: 3rem;
		a {
			text-decoration: none;
			color: #fff;
		}
	}

	@media (max-width: 960px) {
		flex-flow: column nowrap;
		background-color: #252584;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 400px;
		padding-top: 3.5rem;
		transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
		transition: transform 0.3s ease-in-out;
	}
`;

const RightMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<SideMenu open={open} onClick={() => setOpen(!open)} />

			<Ul open={open}>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">About Us</a>
				</li>
				<li>
					<a href="/">Services</a>
				</li>
				<li>
					<a href="/">Pricing</a>
				</li>
				<li>
					<a href="/">Careers</a>
				</li>
			</Ul>
		</>
	);
};

export default RightMenu;
