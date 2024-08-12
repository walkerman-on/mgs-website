import { DocumentCards } from 'features/document-cards';
import React from 'react';
import { Loader } from 'shared/ui/loader';

export const Sidebar = () => {
	return (
		<aside className='grid grid-cols-[1fr_2fr] pt-2'>
			<DocumentCards />
			<div className='flex flex-col justify-center items-center gap-4'>
				<h2 className="text-xl">Выберите интересующий документ, чтобы ознакомиться с ним</h2>
				<Loader />
			</div>
		</aside>
	)
};
