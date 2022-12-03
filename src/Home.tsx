import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className='section section--home'>
			<div className='section--home__text'>
				<p className='section--home__sub-heading'>So, you want to travel to</p>
				<h1 className='section--home__heading'>Space</h1>
				<p className='section--home__body'>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div className='section--home__btn-wrapper'>
				<Link to='/destination' className='section--home__btn'>
					Explore
				</Link>
			</div>
		</section>
	);
};

export default Home;
