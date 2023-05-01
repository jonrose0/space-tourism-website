import { useState } from 'react';
import styled from 'styled-components';
import data from './data';
import Tabs from './Tabs';
import bgCrewMobile from './assets/crew/background-crew-mobile.jpg';
import bgCrewTablet from './assets/crew/background-crew-tablet.jpg';
import bgCrewDesktop from './assets/crew/background-crew-desktop.jpg';

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
	background-image: ${({ crew }) => (crew ? `url(${bgCrewMobile})` : '')};

	@media (min-width: 48em) {
		background-image: ${({ crew }) => (crew ? `url(${bgCrewTablet})` : '')};
		padding-top: 11rem;
	}

	@media (min-width: 64em) {
		background-image: ${({ crew }) => (crew ? `url(${bgCrewDesktop})` : '')};
	}
`;

const HeadingStyled = styled.h2`
	font-family: var(--ff-barlow-condensed);
	font-size: 1rem;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.15rem;
	margin: 0;
	margin-bottom: 2rem;

	span {
		font-weight: 700;
		opacity: 0.25;
		margin-right: 1rem;
	}

	@media (min-width: 48em) {
		font-size: 1.25rem;
		text-align: left;
		margin-bottom: 5rem;
	}

	@media (min-width: 64em) {
		font-size: 1.75rem;
		letter-spacing: 0.25rem;
	}
`;

const Crew = () => {
	// const [crew, setCrew] = useState(data.crew[0]);
	// const [activeTab, setIActiveTab] = useState(0);

	// const handleClick = (index: number) => {
	// 	setCrew(data.crew[index]);
	// 	setIActiveTab(index);
	// };

	return (
		<>
			<Tabs dataType={data.crew} dataName='crew' />
		</>
		// // <SectionStyled crew className='section section--crew'>
		// 	{/* <div className='section--crew__container'> */}
		// 	{/* <HeadingStyled>
		// 		<span>02</span> Meet your crew
		// 	</HeadingStyled> */}
		// 	{/* <div className='section--crew__img-wrapper'>
		// 			<img className='section--crew__img' src={crew.images.png} alt='' />
		// 		</div>
		// 		<div className='section--crew__info'>
		// 			<div className='section--crew__tabs'>
		// 				{data.crew.map((c, index) => {
		// 					return (
		// 						<button
		// 							className={
		// 								activeTab === index
		// 									? 'section--crew__tab section--crew__tab--active'
		// 									: 'section--crew__tab'
		// 							}
		// 							onClick={() => handleClick(index)}
		// 						></button>
		// 					);
		// 				})}
		// 			</div>
		// 			<div>
		// 				<p className='section--crew__occupation'>{crew.role}</p>
		// 				<h3 className='section--crew__name'>{crew.name}</h3>
		// 				<p className='section--crew__body'>{crew.bio}</p>
		// 			</div>
		// 		</div> */}
		// 	{/* </div> */}
		// // </SectionStyled>
	);
};

export default Crew;
