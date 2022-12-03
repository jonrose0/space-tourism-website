import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import logo from './assets/shared/logo.svg';
import navHamburger from './assets/shared/icon-hamburger.svg';
import navClose from './assets/shared/icon-close.svg';

function App() {
	const [navActive, setNavActive] = useState(false);

	const isNavActive = () => {
		setNavActive(!navActive);
	};

	return (
		<div className='App'>
			<header className='header'>
				<Link to='/'>
					<img src={logo} alt='' />
				</Link>
				<nav className='nav'>
					<button className='nav__toggle' onClick={isNavActive}>
						<img src={navHamburger} alt='' />
					</button>
					<ul
						className={navActive ? 'nav__list nav__list--active' : 'nav__list'}
					>
						<button
							className='nav__toggle nav__toggle--close'
							onClick={isNavActive}
						>
							<img src={navClose} alt='' />
						</button>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'nav__link nav__link--active' : 'nav__link'
								}
							>
								<span className='nav__link-number'>00</span> Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/destination'
								className={({ isActive }) =>
									isActive ? 'nav__link nav__link--active' : 'nav__link'
								}
							>
								<span className='nav__link-number'>01</span> Destination
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/crew'
								className={({ isActive }) =>
									isActive ? 'nav__link nav__link--active' : 'nav__link'
								}
							>
								<span className='nav__link-number'>02</span> Crew
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/technology'
								className={({ isActive }) =>
									isActive ? 'nav__link nav__link--active' : 'nav__link'
								}
							>
								<span className='nav__link-number'>03</span> Technology
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
