import { useState } from 'react';
import data from './data.json';

const Technology = () => {
	const [technology, setTechnology] = useState(data.technology[0]);
	const [activeTab, setIActiveTab] = useState(0);

	const handleClick = (index: number) => {
		setTechnology(data.technology[index]);
		setIActiveTab(index);
	};

	return (
		<section className='section section--technology'>
			<div className='section--technology__container'>
				<h2 className='section--technology__heading'>
					<span className='section--technology__heading-number'>03</span> Space
					launch 101
				</h2>
				<div className='section--technology__content'>
					<div className='section--technology__img-wrapper'>
						<picture>
							<source
								srcSet={technology.images.landscape}
								media='(max-width: 1024px)'
							/>
							<img
								className='section--technology__img'
								src={technology.images.portrait}
								alt=''
							/>
						</picture>
					</div>
					<div className='section--technology__info'>
						<div className='section--technology__tabs'>
							{data.technology.map((tech, index) => {
								return (
									<button
										className={
											activeTab === index
												? 'section--technology__tab section--technology__tab--active'
												: 'section--technology__tab'
										}
										onClick={() => handleClick(index)}
									>
										{index + 1}
									</button>
								);
							})}
						</div>
						<div>
							<p className='section--technology__sub-heading'>
								The terminology...
							</p>
							<h3 className='section--technology__name'>{technology.name}</h3>
							<p className='section--technology__body'>
								{technology.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technology;
