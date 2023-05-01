import { useState } from 'react';
import styled from 'styled-components';
import data from './data.js';
import Tabs from './Tabs';
import bgDestinationMobile from './assets/destination/background-destination-mobile.jpg';
import bgDestinationTablet from './assets/destination/background-destination-tablet.jpg';
import bgDestinationDesktop from './assets/destination/background-destination-desktop.jpg';

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
	background-image: ${({ destination }) =>
		destination ? `url(${bgDestinationMobile})` : ''};

	@media (min-width: 48em) {
		background-image: ${({ destination }) =>
			destination ? `url(${bgDestinationTablet})` : ''};
		padding-top: 11rem;
	}

	@media (min-width: 64em) {
		background-image: ${({ destination }) =>
			destination ? `url(${bgDestinationDesktop})` : ''};
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

const ContainerStyled = styled.div`
	@media (min-width: 48em) {
		/* crew */
		display: grid;
	}

	@media (min-width: 64em) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 5rem;
		/* destination */
		max-width: 67.5rem;
		/* technology */
		max-width: 90rem;
		margin-inline: auto;

		/* destination technology */
		h2 {
			grid-column: 1 / 3;
		}

		/* crew */

		img {
			align-self: end;
		}

		.ctonent {
			align-self: center;
		}

		/* technology */
		max-width: 90rem;
		padding-left: 11rem;

		content {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
			justify-self: end;
		}
	}
`;

const Destination = () => {
	// const [destination, setDestination] = useState(data.destinations[0]);
	// const [activeTab, setIActiveTab] = useState(0);

	// const handleClick = (index: number) => {
	// 	setDestination(data.destinations[index]);
	// 	setIActiveTab(index);
	// };

	return (
		<>
			<Tabs dataType={data.destinations} dataName='destination' />
		</>
		// // <SectionStyled destination className='section section--destination'>
		// 	{/* <div className='section--destination__container'> */}
		// 	{/* <HeadingStyled>
		// 			<span>01</span> Pick your destination
		// 		</HeadingStyled> */}
		// 	{/* <div className='section--destination__content'>
		// 			<div className='section--destination__img-wrapper'>
		// 				<img
		// 					className='section--destination__img'
		// 					src={destination.images.png}
		// 					alt=''
		// 				/>
		// 			</div>
		// 			<div className='section--destination__content-text'>
		// 				<div className='section--destination__tabs'>
		// 					{data.destinations.map((destination, index) => {
		// 						return (
		// 							<button
		// 								className={
		// 									activeTab === index
		// 										? 'section--destination__tab section--destination__tab--active'
		// 										: 'section--destination__tab'
		// 								}
		// 								onClick={() => handleClick(index)}
		// 							>
		// 								{destination.name}
		// 							</button>
		// 						);
		// 					})}
		// 				</div>
		// 				<div>
		// 					<h3 className='section--destination__name'>{destination.name}</h3>
		// 					<p className='section--destination__body'>
		// 						{destination.description}
		// 					</p>
		// 					<div className='section--destination__info-wrapper'>
		// 						<div>
		// 							<h4 className='section--destination__info-heading'>
		// 								Avg. distance
		// 							</h4>
		// 							<p className='section--destination__info'>
		// 								{destination.distance}
		// 							</p>
		// 						</div>
		// 						<div>
		// 							<h4 className='section--destination__info-heading'>
		// 								Est. travel time
		// 							</h4>
		// 							<p className='section--destination__info'>
		// 								{destination.travel}
		// 							</p>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div> */}
		// 	{/* </div> */}
		// // </SectionStyled>
	);
};

export default Destination;
