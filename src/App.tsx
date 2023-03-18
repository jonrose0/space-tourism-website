import { Route, Routes } from 'react-router-dom';
import data from './data.json';
import Home from './Home';
import {
	createGlobalStyle,
	DefaultTheme,
	ThemeProvider,
} from 'styled-components';
import Header from './Header';
import Tabs from './Tabs';

const theme: DefaultTheme = {
	fonts: {
		barlow: 'Barlow, sans-serif',
		'barlow-condensed': 'Barlow Condensed, sans-serif',
		bellefair: 'Bellefair, serif',
	},
	colors: {
		primary: 'hsl(231, 77%, 90%);',
		light: 'hsl(0, 0%, 100%)',
		dark: 'hsl(230, 35%, 7%)',
	},
};

const GlobalStyles = createGlobalStyle`
	*,*::before,*::after {
		box-sizing: border-box;
	}

	body {
		color: ${({ theme }) => theme.colors.light};
		min-width: 320px;
		min-height: 100vh;
		margin: 0;
	}

	img {
		display: block;
		max-width: 100%;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	button {
		font: inherit;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}
`;

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/destination'
							element={
								<Tabs dataType={data.destinations} dataName='destination' />
							}
						/>
						<Route
							path='/crew'
							element={<Tabs dataType={data.crew} dataName='crew' />}
						/>
						<Route
							path='/technology'
							element={
								<Tabs dataType={data.technology} dataName='technology' />
							}
						/>
					</Routes>
				</main>
			</ThemeProvider>
		</div>
	);
}

export default App;
