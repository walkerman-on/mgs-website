import { CranesCards, fetchCranesImg } from 'features/cranes-cards';
import React, { useEffect, useState } from 'react';
import { ImageSlider } from 'shared/ui/img-slider';
import { Helmet } from 'react-helmet';

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
			<Helmet>
				<meta
					name="description"
					content="Мы имеем опыт работы по изготовлению рукавов высокого давления для портовых кранов «Либхер» LHM 550 по каталожным номерам с нестандартными фитингами с выдачей протоколов испытаний на РВД."
				/>
			</Helmet>
			<CranesCards />
			<ImageSlider images={cranesImg?.map(item => item?.imgSRC)} description={cranesImg?.map(item => item?.description)} />
		</main>
	);
};

export default CranesPage;
