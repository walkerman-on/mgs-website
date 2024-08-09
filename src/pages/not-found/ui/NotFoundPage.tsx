import React, { useEffect } from 'react';

const NotFoundPage = () => {
	useEffect(() => {
		document.title = 'Страницы не существует';
	}, [])

	return (
		<main className='flex-grow px-10 pt-2'>
			NotFoundPage
		</main>
	);
};

export default NotFoundPage;