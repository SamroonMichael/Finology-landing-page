import React from "react";
import BannerImage from "../assets/banner/banner.png"; // Banner Image

import styled from "styled-components";

const BannerWapper = styled.div`
	background-color: #252584;
`;

const HeroContent = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	.hero-action-text {
		color: #fff;
		padding: 1rem;
		margin-bottom: 60px;
		h1 {
			font-size: 4rem;
			font-weight: 700;
			line-height: 1.3;
		}
		p {
			width: 77%;
		}
	}
	.floater-hero-image {
		box-sizing: border-box;
		box-shadow: none;
		transform: translatey(0px);
		animation: float 6s ease-in-out infinite;
		cursor: pointer;
		position: relative;
		top: 6rem;
		padding: 0.2rem;
		@keyframes float {
			0% {
				transform: translatey(0px);
			}
			50% {
				transform: translatey(-20px);
			}
			100% {
				transform: translatey(0px);
			}
		}
	}
	.floater-hero-image:hover {
		animation-play-state: paused;
	}
`;

const Hero = () => {
	return (
		<BannerWapper>
			<HeroContent>
				<div className="hero-action-text">
					<h1>Make development easy with us.</h1>
					<p>
						Doing development can never be easy, and it takes time and
						resources. We at EasyWork has the solution.
					</p>
				</div>
				<div className="floater-hero-image">
					<img src={BannerImage} alt="banner" />
				</div>
			</HeroContent>
		</BannerWapper>
	);
};

export default Hero;
