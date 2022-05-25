import styled from "styled-components"

export const Title = styled.h1`
	font-size: 4rem;
	margin: 0;
	font-weight: bold;
	text-align: center;
	span {
		color: #f1c50e;
		font-size: 4rem;
	}
	@media (min-width: 0px) and (max-width: 767px) {
		font-size: 200%;
		span {
			font-size: 150%;
		}
	}
	@media (min-width: 1024px) and (max-width: 1279px) {
		font-size: 3rem;
		span {
			font-size: 3rem;
		}
	}
`
export const Subtitle = styled.h3`
	font-size: 2rem;
	margin: 0;
	text-align: start;
	color: #ebcd50;

	font-weight: bold;
	@media (min-width: 0px) and (max-width: 767px) {
		font-size: 150%;
		text-align: center;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		font-size: 2rem;
		text-align: center;
	}
`
export const TitleAboutMe = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	margin-right: 1.25rem;
	color: #f1c50e;
`
export const Content = styled.p`
	overflow-wrap: break-word;
	font-size: 1.5rem;
	font-weight: 600;
	color: #3d3d3d;
`
