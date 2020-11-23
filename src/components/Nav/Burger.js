import React from "react";
import styled from "styled-components";

const HamMenu = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 20px;
	z-index: 1005;
	display: none;
	cursor: pointer;

	@media (max-width: 960px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? "#000" : "#ccc")};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

const Burger = ({ open, onClick }) => {
	return (
		<>
			<HamMenu open={open} onClick={onClick}>
				<div />
				<div />
				<div />
			</HamMenu>
		</>
	);
};

export default Burger;
