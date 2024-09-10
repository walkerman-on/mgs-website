import React from 'react';
import { Loader } from 'shared/ui/loader';

export const PageLoader = () => {
	return (
		<main className='h-screen flex justify-center items-center'>
			<Loader />
		</main>
	);
};
