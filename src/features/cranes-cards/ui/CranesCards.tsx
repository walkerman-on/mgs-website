import { InfoCard } from 'entities/info-card';
import React, { useEffect, useState } from 'react';
import { fetchCranesCards } from '../api/fetchCranesCards';

export const CranesCards = () => {
	const [infoCards, setInfoCards] = useState([]);

	useEffect(() => {
		const loadInfoCards = async () => {
			const data = await fetchCranesCards();
			if (data) {
				setInfoCards(data.content);
			}
		};

		loadInfoCards();
	}, []);

	return (
		<ul className='grid grid-cols-3 grid-rows-2 gap-5 flex-grow max-tablet:grid-cols-1 max-tablet:gap-x-0'>
			{
				infoCards?.map(item => (
					<InfoCard
						title={item?.title}
						description={item?.description}
						id={item?.id}
						long={item?.long}
						iconURL={item?.iconsSRC}
					/>
				))
			}
		</ul>
	);
};
