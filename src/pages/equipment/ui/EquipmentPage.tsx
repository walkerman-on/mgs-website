import { EquipmentCards } from 'features/equipment-cards';
import { useEffect } from 'react';

const EquipmentPage = () => {
	useEffect(() => {
		document.title = 'Оборудование - ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<main className='content gap-5 text-center'>
			<EquipmentCards />
		</main>
	);
};

export default EquipmentPage;