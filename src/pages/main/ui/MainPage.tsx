import { InfoCards } from 'features/info-cards';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export const MainPage = () => {
	// useEffect(() => {
	// 	document.title = 'ООО "Морские Гидравлические Системы"';
	// }, [])

	return (
		<main className='content'>
			<Helmet>
				<title>Рукава высокого давления (РВД) для морских и речных судов, а также кранов и спец.техники в морских и речных портах</title>
				<meta
					name="description"
					content="Наша компания является молодой, динамичной развивающейся организацией, специализирующейся на изготовлении рукавов высокого давления (РВД) для морских и речных судов, а также кранов и спец.техники в морских и речных портах."
				/>
			</Helmet>
			<InfoCards />
		</main>
	);
};




