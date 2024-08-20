import React, { useEffect, useState } from 'react';
import { fetchEquipment } from '../api/fetchEquipment';

export const EquipmentCards = () => {
	const [equipmentCards, setEquiomentCards] = useState([]);

	useEffect(() => {
		const loadInfoCards = async () => {
			const data = await fetchEquipment();
			if (data) {
				setEquiomentCards(data);
			}
		};

		loadInfoCards();
	}, []);

	return (
		<ul className='grid grid-cols-2 grid-rows-2 gap-5'>
			{
				equipmentCards?.map(item => (
					<li className='bg-bg-color p-3 rounded-lg grid place-items-center'>
						<img src={item?.imgSRC} alt={item?.description} />
						<span className='text-center font-medium'>{item?.description}</span>
					</li>
				))
			}
		</ul>
	);
};
