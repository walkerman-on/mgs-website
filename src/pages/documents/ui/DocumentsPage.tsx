import React, { useEffect } from 'react';
import { Loader } from 'shared/ui/loader';
import { Sidebar } from 'widgets/sidebar';

const DocumentsPage = () => {
	useEffect(() => {
		document.title = 'Документы - ООО "Морские Гидравлические Системы';
	}, [])

	return (
		<main className='content'>
			<section className='grid grid-cols-[1fr_2fr] pt-2'>
				<Sidebar />
				<img src={"shared/assets/img/document.png"} alt={"photo"} />
				{/* <div className='flex flex-col justify-center items-center gap-4'>
					<h2 className="text-xl">Выберите интересующий документ, чтобы ознакомиться с ним</h2>
					<Loader />
				</div> */}
			</section>
		</main>
	);
};

export default DocumentsPage;