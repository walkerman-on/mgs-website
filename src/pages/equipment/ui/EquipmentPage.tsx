import { EquipmentCards } from 'features/equipment-cards';
import { useEffect } from 'react';

const EquipmentPage = () => {
	useEffect(() => {
		document.title = 'Оборудование - ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<main className='content flex flex-col gap-5 text-center'>
			<span className='text-lg'>ООО «Морские Гидравлические Системы» имеет квалифицированный персонал и оборудование, позволяющее изготавливать РВД с диаметром до 50 мм с обязательным тестированием изделий на проверочное давление, превышающее рабочее в 1.5 раза в соответствии с требованиями РМРС и РКО, а также на разрывное давление, превышающее рабочее давление в 4 раза с выдачей протокола на проведение приемо-сдаточных испытаний РВД и Сертификата МС.</span>
			<EquipmentCards />
		</main>
	);
};

export default EquipmentPage;