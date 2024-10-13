import { EquipmentCards } from 'features/equipment-cards';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const EquipmentPage = () => {
	useEffect(() => {
		document.title = 'Оборудование - ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<main className='content gap-5 text-center'>
			<Helmet>
				<meta
					name="description"
					content="Наше оборудование позволяет изготавливать РВД диаметром до 50 мм с обязательным тестированием изделий на проверочное давление, превышающее рабочее в 1.5 раза в соответствии с требованиями РМРС и РКО, а также на разрывное давление, превышающее рабочее давление в 4 раза с выдачей протокола на проведение приемо-сдаточных испытаний РВД и Сертификата МС."
				/>
			</Helmet>
			<EquipmentCards />
		</main>
	);
};

export default EquipmentPage;