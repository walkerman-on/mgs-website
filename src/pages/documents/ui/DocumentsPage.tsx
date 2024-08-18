import { useEffect } from 'react';
import { DocumentsCard } from 'widgets/documents-card';
import { Sidebar } from 'widgets/sidebar';

const DocumentsPage = () => {
	useEffect(() => {
		document.title = 'Документы - ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<main className='content'>
			<section className='grid grid-cols-[1fr_2fr] pt-2 gap-8 '>
				<Sidebar />
				<DocumentsCard />
			</section>
		</main>
	);
};

export default DocumentsPage;