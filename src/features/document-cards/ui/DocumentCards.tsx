import { TextCard } from 'entities/text-card';
import React, { useEffect, useState } from 'react';
import { fetchDocuments } from '../api/fetchDocuments';
import { IDocument } from '../types';

export const DocumentCards = () => {
	const [documentCards, setDocumentCards] = useState<IDocument[]>([]);
	useEffect(() => {
		const loadDocumentCards = async () => {
			const data = await fetchDocuments();
			if (data) {
				setDocumentCards(data.content);
			}
		};

		loadDocumentCards();
	}, []);

	const onCardClick = (documentID: string) => {
		console.log("documentID", documentID)
	}

	return (
		<ul className='flex flex-col gap-5'>
			{
				documentCards?.map(item => (
					<TextCard title={item?.title} documentID={item?.documentID} key={item?.documentID} onCardClick={onCardClick} />
				))
			}
		</ul>
	);
};
