import React from "react";
import LogoIcon from "../assets/header/logo.png";
// import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import SearchIcon from "../iconComponents/Search";
import Menu from "./Nav/Menu";

import styled from "styled-components";

const HeaderWapper = styled.header`
	padding: 0.5rem 1.5rem 0rem;
	background-color: #252584;
	position: relative;
	height: 100px;
	width: 100%;
`;

const SiteHeader = styled.div`
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

const Logo = styled.div`
	@media (max-width: 960px) {
		display: none;
	}
`;

const Search = styled.div`
	color: #fff;
	@media (max-width: 960px) {
		position: absolute;
		left: 20;
	}
`;

const Header = () => {
	return (
		<>
			<HeaderWapper>
				<SiteHeader>
					<Logo>
						<img src={LogoIcon} alt="site-logo" />
					</Logo>
					<Menu />
					<Search>
						<SearchIcon width={20} height={20} />
					</Search>
				</SiteHeader>
			</HeaderWapper>
		</>
	);
};

export default Header;
