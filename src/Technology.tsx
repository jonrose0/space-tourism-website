import { useState } from 'react';
import styled from 'styled-components';
import data from './data.js';
import Tabs from './Tabs';
import bgTechnologyMobile from './assets/technology/background-technology-mobile.jpg';
import bgTechnologyTablet from './assets/technology/background-technology-tablet.jpg';
import bgTechnologyDesktop from './assets/technology/background-technology-desktop.jpg';

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
	padding-inline: 0;
	padding-top: 7rem;
	padding-bottom: 5rem;
	background-image: ${({ technology }) =>
		technology ? `url(${bgTechnologyMobile})` : ''};

	@media (min-width: 48em) {
		background-image: ${({ technology }) =>
			technology ? `url(${bgTechnologyTablet})` : ''};
		padding-top: 11rem;
	}

	@media (min-width: 64em) {
		background-image: ${({ technology }) =>
			technology ? `url(${bgTechnologyDesktop})` : ''};
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

const Technology = () => {
	// const [technology, setTechnology] = useState(data.technology[0]);
	// const [activeTab, setIActiveTab] = useState(0);

	// const handleClick = (index: number) => {
	// 	setTechnology(data.technology[index]);
	// 	setIActiveTab(index);
	// };

	return (
		<>
			<Tabs dataType={data.technology} dataName='technology' />
		</>
		// // <SectionStyled technology className='section section--technology'>
		// 	{/* <div className='section--technology__container'> */}
		// 	{/* <HeadingStyled>
		// 			<span>03</span> Space launch 101
		// 		</HeadingStyled> */}
		// 	{/* <div className='section--technology__content'>
		// 			<div className='section--technology__img-wrapper'>
		// 				<picture>
		// 					<source
		// 						srcSet={technology.images.landscape}
		// 						media='(max-width: 1024px)'
		// 					/>
		// 					<img
		// 						className='section--technology__img'
		// 						src={technology.images.portrait}
		// 						alt=''
		// 					/>
		// 				</picture>
		// 			</div>
		// 			<div className='section--technology__info'>
		// 				<div className='section--technology__tabs'>
		// 					{data.technology.map((tech, index) => {
		// 						return (
		// 							<button
		// 								className={
		// 									activeTab === index
		// 										? 'section--technology__tab section--technology__tab--active'
		// 										: 'section--technology__tab'
		// 								}
		// 								onClick={() => handleClick(index)}
		// 							>
		// 								{index + 1}
		// 							</button>
		// 						);
		// 					})}
		// 				</div>
		// 				<div>
		// 					<p className='section--technology__sub-heading'>
		// 						The terminology...
		// 					</p>
		// 					<h3 className='section--technology__name'>{technology.name}</h3>
		// 					<p className='section--technology__body'>
		// 						{technology.description}
		// 					</p>
		// 				</div>
		// 			</div>
		// 		</div> */}
		// 	{/* </div> */}
		// // </SectionStyled>
	);
};

export default Technology;
