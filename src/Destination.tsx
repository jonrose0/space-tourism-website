import { useState } from 'react';
import data from './data.json';

const Destination = () => {
	const [destination, setDestination] = useState(data.destinations[0]);
	const [activeTab, setIActiveTab] = useState(0);

	const handleClick = (index: number) => {
		setDestination(data.destinations[index]);
		setIActiveTab(index);
	};

	console.log(data.destinations);
	return (
		<section className='section section--destination'>
			<div className='section--destination__container'>
				<h2 className='section--destination__heading'>
					<span className='section--destination__heading-number'>01</span> Pick
					your destination
				</h2>
				<div className='section--destination__content'>
					<div className='section--destination__img-wrapper'>
						<img
							className='section--destination__img'
							src={destination.images.png}
							alt=''
						/>
					</div>
					<div className='section--destination__content-text'>
						<div className='section--destination__tabs'>
							{data.destinations.map((destination, index) => {
								return (
									<button
										className={
											activeTab === index
												? 'section--destination__tab section--destination__tab--active'
												: 'section--destination__tab'
										}
										onClick={() => handleClick(index)}
									>
										{destination.name}
									</button>
								);
							})}
						</div>
						<div>
							<h3 className='section--destination__name'>{destination.name}</h3>
							<p className='section--destination__body'>
								{destination.description}
							</p>
							<div className='section--destination__info-wrapper'>
								<div>
									<h4 className='section--destination__info-heading'>
										Avg. distance
									</h4>
									<p className='section--destination__info'>
										{destination.distance}
									</p>
								</div>
								<div>
									<h4 className='section--destination__info-heading'>
										Est. travel time
									</h4>
									<p className='section--destination__info'>
										{destination.travel}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Destination;
