import { useEffect, useState } from 'react';
import styled from 'styled-components';
import bgDestinationMobile from './assets/destination/background-destination-mobile.jpg';
import bgDestinationTablet from './assets/destination/background-destination-tablet.jpg';
import bgDestinationDesktop from './assets/destination/background-destination-desktop.jpg';
import bgCrewMobile from './assets/crew/background-crew-mobile.jpg';
import bgCrewTablet from './assets/crew/background-crew-tablet.jpg';
import bgCrewDesktop from './assets/crew/background-crew-desktop.jpg';
import bgTechnologyMobile from './assets/technology/background-technology-mobile.jpg';
import bgTechnologyTablet from './assets/technology/background-technology-tablet.jpg';
import bgTechnologyDesktop from './assets/technology/background-technology-desktop.jpg';

console.log(bgTechnologyDesktop);

interface DescriptionProps {
	styles: string;
}

const SectionStyled = styled.section<DescriptionProps>`
	text-align: center;
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;
	padding-inline: ${({ styles }) => (styles === 'technology' ? '0' : '1.5rem')};
	padding-top: 7rem;
	background-image: ${({ styles }) =>
		styles === 'destination'
			? `url(${bgDestinationMobile})`
			: styles === 'crew'
			? `url(${bgCrewMobile})`
			: styles === 'technology'
			? `url(${bgTechnologyMobile})`
			: ''};

	@media (min-width: 48em) {
		background-image: ${({ styles }) =>
			styles === 'destination'
				? `url(${bgDestinationTablet})`
				: styles === 'crew'
				? `url(${bgCrewTablet})`
				: styles === 'technology'
				? `url(${bgTechnologyTablet})`
				: ''};
		padding-top: 11rem;
	}

	@media (min-width: 64em) {
		text-align: left;
		background-image: ${({ styles }) =>
			styles === 'destination'
				? `url(${bgDestinationDesktop})`
				: styles === 'crew'
				? `url(${bgCrewDesktop})`
				: styles === 'technology'
				? `url(${bgTechnologyDesktop})`
				: ''};
	}
`;

const DescriptionStyled = styled.p<DescriptionProps>`
	font-family: ${({ theme }) => theme.fonts.barlow};
	font-size: 0.9375rem;
	line-height: 1.6;
	color: ${({ theme }) => theme.colors.primary};
	margin-top: ${({ styles }) => styles === 'destination' && '0.5rem'};
	margin-bottom: ${({ styles }) => styles === 'destination' && '2.5rem'};

	@media (min-width: 48em) {
		font-size: 1rem;

		max-width: ${({ styles }) =>
			styles === 'destination'
				? '35rem'
				: styles === 'crew'
				? '29rem'
				: styles === 'technology'
				? '25rem'
				: ''};
		margin-inline: auto;
	}

	@media (min-width: 64em) {
		font-size: 1.125rem;

		max-width: ${({ styles }) =>
			styles === 'crew' ? '28rem' : styles === 'technology' ? '27.7rem' : ''};
		margin: ${({ styles }) =>
			styles === 'crew' || styles === 'technology' ? '0' : ''};
	}
`;

const ImageWrapperStyled = styled.div<DescriptionProps>`
	margin-bottom: ${({ styles }) => styles === 'destination' && '2rem'};
	border-bottom: ${({ styles }) =>
		styles === 'crew' && '0.1rem solid hsl(0, 0%, 100%, 0.2)'};
	@media (min-width: 48em) {
		margin-bottom: ${({ styles }) => styles === 'destination' && '3rem'};
		border: ${({ styles }) => styles === 'crew' && 'none'};
		grid-row: ${({ styles }) => styles === 'crew' && '3 / 4'};
	}

	@media (min-width: 64em) {
		flex-basis: ${({ styles }) =>
			styles === 'destination' ? '50%' : styles === 'technology' ? '40%' : ''};
		grid-column: ${({ styles }) => styles === 'crew' && '2 / 3'};
		grid-row: ${({ styles }) => styles === 'crew' && '1 / 3'};
		display: ${({ styles }) => styles === 'crew' && 'flex'};
	}
`;

const ImageStyled = styled.img<DescriptionProps>`
	width: ${({ styles }) => styles === 'technology' && '100%'};
	max-width: ${({ styles }) =>
		styles === 'destination' || styles === 'crew' ? '50%' : ''};
	margin-inline: ${({ styles }) =>
		styles === 'destination' || styles === 'crew' ? 'auto' : ''};

	@media (min-width: 64em) {
		max-width: ${({ styles }) =>
			styles === 'destination' || styles === 'crew' ? '100%' : ''};
	}
`;

const TabsStyled = styled.div<DescriptionProps>`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: ${({ styles }) =>
		styles === 'crew' ? '2.5rem 0' : styles === 'technology' ? '2rem 0' : ''};
	margin-bottom: ${({ styles }) => styles === 'destination' && '1rem'};

	@media (min-width: 48em) {
		margin: ${({ styles }) => styles === 'technology' && '2.5rem 0'};
		margin-top: ${({ styles }) => styles === 'crew' && '1.5rem'};
	}

	@media (min-width: 64em) {
		justify-content: ${({ styles }) =>
			styles === 'destination' || styles === 'crew' ? 'flex-start' : 'center'};
		flex-direction: ${({ styles }) => styles === 'technology' && 'column'};
		gap: ${({ styles }) =>
			styles === 'destination' || styles === 'technology' ? '2rem' : '1rem'};
		margin-top: ${({ styles }) => styles === 'crew' && '8rem'};
	}
`;

const TabStyled = styled.button<DescriptionProps>`
	font-family: ${({ styles, theme }) =>
		styles === 'destination'
			? theme.fonts['barlow-condensed']
			: styles === 'technology'
			? theme.fonts.bellefair
			: ''};
	font-size: ${({ styles }) => styles === 'destination' && '0.875rem'};
	letter-spacing: ${({ styles }) => styles === 'destination' && '0.15rem'};
	text-transform: ${({ styles }) => styles === 'destination' && 'uppercase'};
	background-color: ${({ styles, theme }) =>
		styles === 'crew' && theme.colors.light};
	color: ${({ styles, theme }) =>
		styles === 'destination'
			? theme.colors.primary
			: styles === 'technology'
			? theme.colors.light
			: ''};
	position: ${({ styles }) => styles === 'destination' && 'relative'};
	padding: ${({ styles }) =>
		styles === 'destination' ? '0 0 1rem' : styles === 'crew' ? '0' : ''};
	width: ${({ styles }) =>
		styles === 'crew' ? '0.625rem' : styles === 'technology' ? '2.5rem' : ''};
	height: ${({ styles }) =>
		styles === 'crew' ? '0.625rem' : styles === 'technology' ? '2.5rem' : ''};
	border: ${({ styles }) =>
		styles === 'technology' && '0.1rem solid hsl(0, 0%, 100%, 0.25)'};
	border-radius: ${({ styles }) =>
		styles === 'crew' || styles === 'technology' ? '50%' : '0'};
	opacity: ${({ styles }) => styles === 'crew' && '0.2'};

	&:hover::after {
		display: ${({ styles }) => styles === 'destination' && 'block'};
	}

	&::after {
		content: '';
		display: ${({ styles }) => styles === 'destination' && 'none'};
		position: ${({ styles }) => styles === 'destination' && 'absolute'};
		bottom: ${({ styles }) => styles === 'destination' && '0'};
		left: ${({ styles }) => styles === 'destination' && '0'};
		width: ${({ styles }) => styles === 'destination' && '100%'};
		height: ${({ styles }) => styles === 'destination' && '3px'};
		background-color: ${({ styles }) =>
			styles === 'destination' && 'hsla(0, 0%, 100%, 0.5)'};
	}

	&.active::after {
		background-color: ${({ styles, theme }) =>
			styles === 'destination' && theme.colors.light};
		display: ${({ styles }) => styles === 'destination' && 'block'};
	}

	&.active {
		opacity: ${({ styles }) => styles === 'crew' && '1'};
		background-color: ${({ styles, theme }) =>
			styles === 'technology' && theme.colors.light};
		color: ${({ styles, theme }) =>
			styles === 'technology' && theme.colors.dark};
		border-color: ${({ styles, theme }) =>
			styles === 'technology' && theme.colors.light};
	}

	@media (min-width: 48em) {
		font-size: ${({ styles }) =>
			styles === 'destination'
				? '1rem'
				: styles === 'technology'
				? '1.5rem'
				: ''};
		width: ${({ styles }) => styles === 'technology' && '3.75rem'};
		height: ${({ styles }) => styles === 'technology' && '3.75rem'};
	}

	@media (min-width: 64em) {
		font-size: ${({ styles }) => styles === 'technology' && '2rem'};
		width: ${({ styles }) => styles === 'technology' && '5rem'};
		height: ${({ styles }) => styles === 'technology' && '5rem'};

		&:hover {
			border-color: ${({ styles }) =>
				styles === 'technology' && 'hsl(0, 0%, 100%, 1)'};
			opacity: ${({ styles }) => styles === 'crew' && '0.5'};
		}
	}
`;

const HeadingStyled = styled.h2<DescriptionProps>`
	font-family: ${({ theme }) => theme.fonts['barlow-condensed']};
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
		margin-left: ${({ styles }) => styles === 'technology' && '1.5rem'};
	}

	@media (min-width: 64em) {
		font-size: 1.75rem;
		letter-spacing: 0.25rem;
	}
`;

const Heading3Styled = styled.h3<DescriptionProps>`
	font-family: ${({ theme }) => theme.fonts.bellefair};
	font-size: ${({ styles }) =>
		styles === 'destination' ? '3.5rem' : '1.5rem'};
	font-weight: 400;
	text-transform: uppercase;
	margin: ${({ styles }) =>
		styles === 'destination' || styles === 'crew' ? '0' : ''};
	margin-top: ${({ styles }) => styles === 'technology' && '0'};

	@media (min-width: 48em) {
		font-size: ${({ styles }) =>
			styles === 'destination' ? '5rem' : '2.5rem'};
		margin-bottom: ${({ styles }) => styles === 'technology' && '2rem'};
	}

	@media (min-width: 64em) {
		font-size: ${({ styles }) =>
			styles === 'destination' ? '6.25rem' : '3.5rem'};
	}
`;

const SubHeadingStyled = styled.p<DescriptionProps>`
	font-family: ${({ styles, theme }) =>
		styles === 'crew'
			? theme.fonts.bellefair
			: styles === 'technology'
			? theme.fonts['barlow-condensed']
			: ''};
	font-size: ${({ styles }) => styles === 'technology' && '0.875rem'};
	letter-spacing: ${({ styles }) => styles === 'technology' && '0.15rem'};
	text-transform: uppercase;
	color: ${({ styles, theme }) =>
		styles === 'technology' && theme.colors.primary};
	opacity: ${({ styles }) => styles === 'crew' && '0.5'};
	margin-bottom: ${({ styles }) => styles === 'crew' && '0.5rem'};

	@media (min-width: 48em) {
		font-size: ${({ styles }) =>
			styles === 'crew' ? '1.5rem' : styles === 'technology' ? '1rem' : ''};
	}

	@media (min-width: 64em) {
		font-size: ${({ styles }) => styles === 'crew' && '2rem'};
	}
`;

const InfoWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border-top: 1px solid hsl(0, 0%, 100%, 0.2);
	padding-top: 2rem;

	@media (min-width: 48em) {
		flex-direction: row;
		justify-content: center;
		gap: 7rem;
		padding-bottom: 3rem;
	}

	@media (min-width: 64em) {
		justify-content: flex-start;
		gap: 5rem;
	}
`;

const InfoHeadingStyled = styled.h4`
	font-family: ${({ theme }) => theme.fonts['barlow-condensed']};
	font-size: 0.875rem;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.primary};
	text-transform: uppercase;
	letter-spacing: 0.15rem;
	margin: 0;
	margin-bottom: 1rem;
`;

const InfoStyled = styled.p`
	font-family: ${({ theme }) => theme.fonts.bellefair};
	font-size: 1.75rem;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.light};
	margin: 0;
`;

const ContentStyled = styled.div<DescriptionProps>`
	padding-inline: ${({ styles }) => styles === 'technology' && '1.5rem'};

	@media (min-width: 48em) {
		display: ${({ styles }) => styles === 'crew' && 'flex'};
		flex-direction: ${({ styles }) => styles === 'crew' && 'column-reverse'};
	}

	@media (min-width: 64em) {
		display: ${({ styles }) => styles === 'technology' && 'flex'};
		grid-column: ${({ styles }) => styles === 'crew' && '1 / 2'};
		flex-basis: ${({ styles }) => styles === 'destination' && '40%'};
		align-items: ${({ styles }) => styles === 'technology' && 'center'};
		align-self: ${({ styles }) => styles === 'crew' && 'center'};
		gap: ${({ styles }) => styles === 'technology' && '5rem'};
	}
`;

const ContainerStyled = styled.div<DescriptionProps>`
	@media (min-width: 48em) {
		display: ${({ styles }) => styles === 'crew' && 'grid'};
	}

	@media (min-width: 64em) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 5rem;
		max-width: ${({ styles }) =>
			styles === 'destination' || styles === 'crew'
				? '67.5rem'
				: styles === 'technology'
				? '90rem'
				: ''};
		padding-left: ${({ styles }) => styles === 'technology' && '11rem'};
		margin-inline: auto;

		${HeadingStyled} {
			grid-column: ${({ styles }) =>
				styles === 'destination' || styles === 'technology' ? '1 / 3' : ''};
		}

		${ImageWrapperStyled} {
			grid-column: ${({ styles }) => styles === 'technology' && '2 / 3'};
			grid-row: ${({ styles }) => styles === 'technology' && '2 / 3'};
			justify-self: ${({ styles }) => styles === 'technology' && 'end'};
			align-self: ${({ styles }) => styles === 'crew' && 'end'};
		}

		${ContentStyled} {
			align-self: center;
		}
	}
`;

interface TabsProps {
	dataType: {
		name: string;
		images: {
			png?: string;
			webp?: string;
			portrait?: string;
			landscape?: string;
		};
		description?: string;
		distance?: string;
		travel?: string;
		role?: string;
		bio?: string;
	}[];
	dataName: string;
}

function Tabs({ dataType, dataName }: TabsProps) {
	const [tabData, setTabData] = useState(dataType[0]);
	const [activeTab, setIActiveTab] = useState(0);

	console.log(tabData);

	useEffect(() => {
		setTabData(dataType[0]);
		setIActiveTab(0);
	}, [dataType]);

	const handleClick = (index: number) => {
		setTabData(dataType[index]);
		setIActiveTab(index);
	};

	return (
		<>
			<SectionStyled styles={dataName}>
				<ContainerStyled
					styles={dataName}
					className='section--destination__container'
				>
					{dataName === 'destination' ? (
						<HeadingStyled styles={dataName}>
							<span>01</span> Pick your destination
						</HeadingStyled>
					) : dataName === 'crew' ? (
						<HeadingStyled styles={dataName}>
							<span>02</span> Meet your crew
						</HeadingStyled>
					) : dataName === 'technology' ? (
						<HeadingStyled styles={dataName}>
							<span>03</span> Space launch 101
						</HeadingStyled>
					) : (
						''
					)}
					<ImageWrapperStyled styles={dataName}>
						{dataName === 'technology' ? (
							<picture>
								<source
									srcSet={tabData.images.landscape}
									media='(max-width: 1024px)'
								/>
								<ImageStyled
									styles={dataName}
									src={tabData.images.portrait}
									alt=''
								/>
							</picture>
						) : (
							<ImageStyled styles={dataName} src={tabData.images.png} alt='' />
						)}
					</ImageWrapperStyled>
					<ContentStyled styles={dataName}>
						<TabsStyled styles={dataName}>
							{dataType.map((data, index) => {
								return (
									<TabStyled
										styles={dataName}
										key={index}
										className={activeTab === index ? `active` : ``}
										onClick={() => handleClick(index)}
									>
										{dataName === 'destination'
											? data.name
											: dataName === 'technology'
											? index + 1
											: ''}
									</TabStyled>
								);
							})}
						</TabsStyled>
						<div>
							<SubHeadingStyled styles={dataName}>
								{dataName === 'crew'
									? tabData.role
									: dataName === 'technology'
									? 'The terminology...'
									: ''}
							</SubHeadingStyled>
							<Heading3Styled styles={dataName}>{tabData.name}</Heading3Styled>
							<DescriptionStyled styles={dataName}>
								{dataName === 'crew' ? tabData.bio : tabData.description}
							</DescriptionStyled>
							{dataName === 'destination' ? (
								<InfoWrapperStyled>
									<div>
										<InfoHeadingStyled>Avg. distance</InfoHeadingStyled>
										<InfoStyled>{tabData.distance}</InfoStyled>
									</div>
									<div>
										<InfoHeadingStyled>Est. travel time</InfoHeadingStyled>
										<InfoStyled>{tabData.travel}</InfoStyled>
									</div>
								</InfoWrapperStyled>
							) : (
								''
							)}
						</div>
					</ContentStyled>
				</ContainerStyled>
			</SectionStyled>
		</>
	);
}

export default Tabs;
