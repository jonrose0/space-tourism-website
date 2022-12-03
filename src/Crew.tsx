import { useState } from 'react';
import data from './data.json';

const Crew = () => {
	const [crew, setCrew] = useState(data.crew[0]);
	const [activeTab, setIActiveTab] = useState(0);

	const handleClick = (index: number) => {
		setCrew(data.crew[index]);
		setIActiveTab(index);
	};

	return (
		<section className='section section--crew'>
			<div className='section--crew__container'>
				<h2 className='section--crew__heading'>
					<span className='section--crew__heading-number'>02</span> Meet your
					crew
				</h2>

				<div className='section--crew__img-wrapper'>
					<img className='section--crew__img' src={crew.images.png} alt='' />
				</div>
				<div className='section--crew__info'>
					<div className='section--crew__tabs'>
						{data.crew.map((c, index) => {
							return (
								<button
									className={
										activeTab === index
											? 'section--crew__tab section--crew__tab--active'
											: 'section--crew__tab'
									}
									onClick={() => handleClick(index)}
								></button>
							);
						})}
					</div>
					<div>
						<p className='section--crew__occupation'>{crew.role}</p>
						<h3 className='section--crew__name'>{crew.name}</h3>
						<p className='section--crew__body'>{crew.bio}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Crew;
