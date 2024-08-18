import { fetchDocumentImgById, IDocument } from 'features/document-cards';
import { FC, useCallback } from 'react';


export const TextCard: FC<IDocument> = ({ title, documentID, onCardClick }) => {
	return (
		<li
			onClick={() => onCardClick(documentID)}
			className='bg-bg-color rounded-lg py-3 px-5 cursor-pointer font-medium hover:bg-color-accent hover:text-bg-color transition duration-300 ease-in-out' >
			{title}
		</li>
	);
};
