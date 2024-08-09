import React from 'react';
import { Navigation } from 'widgets/navigation';

export const Footer = () => {
	return (
		<footer className=' py-5 flex flex-col justify-center items-center flex-shrink-0'>
			<p className='flex gap-3 text-sm'>
				<span>ИНН 2315230435</span>
				<span>КПП 231501001</span>
				<span>ОГРН 32300031501</span>
			</p>
			<h3 className='text-base font-medium'>© 2023-2024, ООО "Морские Гидравлические Системы"</h3>
		</footer>
	);
};
