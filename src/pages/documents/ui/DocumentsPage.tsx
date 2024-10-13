import { DocumentProvider } from 'app/providers/document-provider';
import { useEffect } from 'react';
import { DocumentsCard } from 'widgets/documents-card';
import { Sidebar } from 'widgets/sidebar';
import { Helmet } from 'react-helmet';

const DocumentsPage = () => {
	useEffect(() => {
		document.title = 'Документы - ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<DocumentProvider>
			<main className='content'>
				<Helmet>
					<meta
						name="description"
						content="Наша продукция одобрена РМРС и РКО"
					/>
				</Helmet>
				<section className='grid grid-cols-[1.5fr_2fr] pt-2 gap-8 max-phone:grid-cols-1'>
					<Sidebar />
					<DocumentsCard />
				</section>
			</main>
		</DocumentProvider>
	);
};

export default DocumentsPage;