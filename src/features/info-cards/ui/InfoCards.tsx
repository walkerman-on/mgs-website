import { InfoCard } from 'entities/info-card';
import React, { useEffect, useState } from 'react';
import { fetchInfoCards } from '../api/fetchInfoCards';

export const InfoCards = () => {
	const [infoCards, setInfoCards] = useState([]);

	useEffect(() => {
		const loadInfoCards = async () => {
			const data = await fetchInfoCards();
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
						id={item?.id} long={item?.long}
					/>
				))
			}
		</ul>
	);
};
