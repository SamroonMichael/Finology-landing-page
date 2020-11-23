import React from "react";
import DashboardImage from "../assets/content/content-001.png";
import LoginImage from "../assets/content/content-002.png";

import styled from "styled-components";

const DashboardWapper = styled.div`
	display: flex;
	align-items: center;
`;

const LoginWapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`;

const Content = () => {
	return (
		<>
			<DashboardWapper>
				<img src={DashboardImage} alt="dashboard" />
				<div>
					<h1>We can give our best user experience to your system</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged
					</p>
				</div>
			</DashboardWapper>
			<LoginWapper>
				<img src={LoginImage} alt="login" />
				<div>
					<h1>Easy access. Whenever, wherever you want</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged
					</p>
				</div>
			</LoginWapper>
		</>
	);
};

export default Content;
