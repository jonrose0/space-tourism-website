import { Link } from 'react-router-dom';
import logo from './assets/shared/logo.svg';
import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyled = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	z-index: 100;

	@media (min-width: 48em) {
		padding-top: 0;
		padding-right: 0;
	}

	@media (min-width: 64em) {
		padding: 2.5rem;
		padding-right: 0;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 12%;
			width: 32%;
			height: 0.1rem;
			background-color: hsl(0, 0%, 100%, 0.2);
			z-index: 10;
		}
	}
`;

function Header() {
	return (
		<HeaderStyled>
			<Link to='/'>
				<img src={logo} alt='' />
			</Link>
			<Nav />
		</HeaderStyled>
	);
}

export default Header;
