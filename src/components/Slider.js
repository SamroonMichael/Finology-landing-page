import React from "react";
import SliderImage from "../assets/slider.png";

import styled from "styled-components";

const SliderWapper = styled.div`
	display: flex;
`;

const Slider = () => {
	return (
		<SliderWapper>
			<img src={SliderImage} alt="slider" />
		</SliderWapper>
	);
};

export default Slider;
