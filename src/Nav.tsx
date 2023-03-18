import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navHamburger from './assets/shared/icon-hamburger.svg';
import navClose from './assets/shared/icon-close.svg';
import styled from 'styled-components';

const NavStyled = styled.nav`
	@media (min-width: 64em) {
		flex-basis: 60%;
	}
`;

interface NavToggleProps {
	close?: boolean;
}

const NavToggleStyled = styled.button<NavToggleProps>`
	position: ${({ close }) => close && 'absolute'};
	top: ${({ close }) => close && '2rem'};
	right: ${({ close }) => close && '1.5rem'};
	@media (min-width: 48em) {
		display: none;
	}
`;

interface NavListProps {
	active: boolean;
}

const NavListStyled = styled.ul<NavListProps>`
	display: ${({ active }) => (active ? 'flex' : 'none')};
	position: absolute;
	top: 0;
	right: 0;
	background-color: hsl(0, 0%, 100%, 0.04);
	width: 60%;
	height: 100vh;
	backdrop-filter: blur(40px);
	flex-direction: column;
	gap: 1rem;
	padding: 7rem 0 0 2rem;

	@media (min-width: 48em) {
		position: static;
		display: flex;
		flex-direction: row;
		width: auto;
		height: auto;
		padding: 0 2.5rem;
	}

	@media (min-width: 64em) {
		justify-content: center;
		gap: 2.5rem;
	}
`;

const NavLinkStyled = styled(NavLink)`
	font-family: ${({ theme }) => theme.fonts['barlow-condensed']};
	color: ${({ theme }) => theme.colors.light};
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	text-decoration: none;
	position: relative;
	display: block;
	padding: 0.5rem 0;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		display: none;
		background-color: ${({ theme }) => theme.colors.light};
		right: 0;
		width: 4px;
		height: 100%;
	}

	&.active::after {
		display: block;
		background-color: ${({ theme }) => theme.colors.light};
	}

	@media (min-width: 48em) {
		padding: 2.5rem 0;

		&::after {
			background-color: ${({ theme }) => theme.colors.light};
			right: 0;
			width: 100%;
			height: 3px;
		}
	}

	@media (min-width: 64em) {
		&:hover::after {
			background-color: hsla(0, 0%, 100%, 0.5);
			display: block;
		}
	}
`;

const NavLinkNumberStyled = styled.span`
	font-weight: 700;

	@media (min-width: 48em) {
		display: none;
	}

	@media (min-width: 64em) {
		display: inline;
	}
`;

function Nav() {
	const [navActive, setNavActive] = useState(false);

	const isNavActive = () => {
		setNavActive(!navActive);
	};

	return (
		<NavStyled>
			<NavToggleStyled onClick={isNavActive}>
				<img src={navHamburger} alt='' />
			</NavToggleStyled>
			<NavListStyled active={navActive}>
				<NavToggleStyled close onClick={isNavActive}>
					<img src={navClose} alt='' />
				</NavToggleStyled>
				<li>
					<NavLinkStyled to='/'>
						<NavLinkNumberStyled>00</NavLinkNumberStyled> Home
					</NavLinkStyled>
				</li>
				<li>
					<NavLinkStyled to='/destination'>
						<NavLinkNumberStyled>01</NavLinkNumberStyled> Destination
					</NavLinkStyled>
				</li>
				<li>
					<NavLinkStyled to='/crew'>
						<NavLinkNumberStyled>02</NavLinkNumberStyled> Crew
					</NavLinkStyled>
				</li>
				<li>
					<NavLinkStyled to='/technology'>
						<NavLinkNumberStyled>03</NavLinkNumberStyled> Technology
					</NavLinkStyled>
				</li>
			</NavListStyled>
		</NavStyled>
	);
}

export default Nav;
