import { InfoCards } from 'features/info-cards';
import React, { useEffect } from 'react';

export const MainPage = () => {
	useEffect(() => {
		document.title = 'ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<main className='content'>
			<InfoCards />
		</main>
	);
};




