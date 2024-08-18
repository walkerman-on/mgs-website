import { DocumentCards } from 'features/document-cards';
import React from 'react';
import { Loader } from 'shared/ui/loader';

export const Sidebar = () => {
	return (
		<aside className=''>
			<DocumentCards />
		</aside>
	)
};
