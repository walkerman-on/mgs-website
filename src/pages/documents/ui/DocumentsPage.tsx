import React, { useEffect } from 'react';
import { Sidebar } from 'widgets/sidebar';

const DocumentsPage = () => {
	useEffect(() => {
		document.title = 'Документы - ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<main className='content'>
			<Sidebar />
		</main>
	);
};

export default DocumentsPage;