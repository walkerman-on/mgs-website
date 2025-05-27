import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {EmissionCards} from "features/emission-cards";
import {fetchCranesImg} from "../../../features/emission-cards";
import {ImageSlider} from "../../../shared/ui/img-slider";

const EmissionControlPage = () => {
	useEffect(() => {
		document.title = 'Контроль выбросов - ООО "Морские Гидравлические Системы';
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
					content="Обследование двигателей на соответствие предельно допустимым значениям выбросов вредных веществ и дымности выпускных газов"
				/>
			</Helmet>
			<EmissionCards/>
			<ImageSlider images={cranesImg?.map(item => item?.imgSRC)} description={cranesImg?.map(item => item?.description)} />
		</main>
	);
};

export default EmissionControlPage;