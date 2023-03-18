import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgHomeMobile from './assets/home/background-home-mobile.jpg';
import bgHomeTablet from './assets/home/background-home-tablet.jpg';
import bgHomeDesktop from './assets/home/background-home-desktop.jpg';

interface SectionProps {
	home?: boolean;
	destination?: boolean;
	crew?: boolean;
	technology?: boolean;
}

const SectionStyled = styled.section<SectionProps>`
	text-align: center;
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;
	padding-inline: 1.5rem;
	padding-top: 7rem;
	background-image: url(${bgHomeMobile});

	@media (min-width: 48em) {
		background-image: url(${bgHomeTablet});
		padding-top: 11rem;
	}

	@media (min-width: 64em) {
		background-image: url(${bgHomeDesktop});
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		text-align: left;
	}
`;

const Container = styled.div`
	margin-bottom: 5rem;

	@media (min-width: 48em) {
		margin-bottom: 7rem;
	}
`;

const HeadingStyled = styled.h1`
	font-family: ${({ theme }) => theme.fonts.bellefair};
	font-size: 5rem;
	font-weight: 400;
	text-transform: uppercase;
	margin: 0;
	margin-bottom: 1.5rem;

	@media (min-width: 48em) {
		font-size: 9.375rem;
	}
`;

const SubHeadingStyled = styled.p`
	font-family: ${({ theme }) => theme.fonts['barlow-condensed']};
	text-transform: uppercase;
	letter-spacing: 0.15rem;
	color: ${({ theme }) => theme.colors.primary};

	@media (min-width: 48em) {
		font-size: 1.25rem;
	}

	@media (min-width: 64em) {
		font-size: 1.75rem;
	}
`;

const ButtonWrapperStyled = styled.div`
	@media (min-width: 64em) {
		margin-bottom: 10rem;
	}
`;

const DescriptionStyled = styled.p`
	font-family: ${({ theme }) => theme.fonts.barlow};
	font-size: 0.9375rem;
	line-height: 1.6;
	color: ${({ theme }) => theme.colors.primary};

	@media (min-width: 48em) {
		font-size: 1rem;
		max-width: 27.5rem;
		margin-inline: auto;
	}

	@media (min-width: 64em) {
		font-size: 1.125rem;
	}
`;

const ButtonStyled = styled(Link)`
	font-family: ${({ theme }) => theme.fonts.bellefair};
	font-size: 1.25rem;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 0.1rem;
	background-color: ${({ theme }) => theme.colors.light};
	color: ${({ theme }) => theme.colors.dark};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 9.4rem;
	height: 9.4rem;
	border-radius: 50%;
	margin-inline: auto;

	@media (min-width: 48em) {
		font-size: 2rem;
		width: 15.125rem;
		height: 15.125rem;
	}

	@media (min-width: 64em) {
		width: 17.125rem;
		height: 17.125rem;
		position: relative;

		&:hover::before {
			content: '';
			box-sizing: content-box;
			position: absolute;
			width: 100%;
			height: 100%;
			border: 5.5rem solid hsl(0, 0%, 100%, 0.1);
			border-radius: 50%;
		}
	}
`;

const Home = () => {
	return (
		<SectionStyled home className='section section--home'>
			<Container>
				<SubHeadingStyled>So, you want to travel to</SubHeadingStyled>
				<HeadingStyled>Space</HeadingStyled>
				<DescriptionStyled>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</DescriptionStyled>
			</Container>
			<ButtonWrapperStyled>
				<ButtonStyled to='/destination'>Explore</ButtonStyled>
			</ButtonWrapperStyled>
		</SectionStyled>
	);
};

export default Home;
