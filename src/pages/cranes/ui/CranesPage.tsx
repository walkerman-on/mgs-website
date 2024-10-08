import { CranesCards, fetchCranesImg } from 'features/cranes-cards';
import React, { useEffect, useState } from 'react';
import { ImageSlider } from 'shared/ui/img-slider';

const CranesPage = () => {
	useEffect(() => {
		document.title = 'Краны "Либхер" - ООО "Морские Гидравлические Системы';
	}, [])

	const [cranesImg, setCranesImg] = useState([]);

	useEffect(() => {
		const loadInfoCards = async () => {
			const data = await fetchCranesImg();
			if (data) {
				setCranesImg(data);
			}
		};

		loadInfoCards();

	}, []);

	return (
		<main className='content grid grid-cols-3 gap-5 max-phone:grid-cols-1'>
			<CranesCards />
			<ImageSlider images={cranesImg?.map(item => item?.imgSRC)} description={cranesImg?.map(item => item?.description)} />
		</main>
	);
};

export default CranesPage;
