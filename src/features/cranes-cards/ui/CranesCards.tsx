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
		<ul className='flex-grow flex flex-col gap-5 col-span-3'>
			{
				infoCards?.map(item => (
					<InfoCard
						title={item?.title}
						description={item?.description}
						id={item?.id}
						long={item?.long}
						iconURL={item?.iconsSRC}
						drop_down
						open={item?.open}
					/>
				))
			}
		</ul>
	);
};
