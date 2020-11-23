import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Conent from "../Content";
import Slider from "../Slider";
import ListPeople from "../PeopleProfile/ListPeople";

import styled from "styled-components";

const LayoutWapper = styled.main`
	width: 100%;
	margin: 0 auto;
`;

const ContentWapper = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
`;

const Layout = () => {
	return (
		<>
			<Header />
			<LayoutWapper>
				<Hero />
				<ContentWapper>
					<Conent />
					<Slider />
					<ListPeople />
				</ContentWapper>
			</LayoutWapper>
		</>
	);
};

export default Layout;
