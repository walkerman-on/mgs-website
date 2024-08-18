import { TextCard } from 'entities/text-card';
import { useCallback, useEffect, useState } from 'react';
import { fetchDocuments } from '../api/fetchDocuments';
import { IDocument } from '../types';
import { useDocument } from 'app/providers/document-provider';

export const DocumentCards = () => {
	const [documentCards, setDocumentCards] = useState<IDocument[]>([]);
	const [activeDocumentID, setActiveDocumentID] = useState<string | null>(null);
	const { onDocumentClick } = useDocument();

	useEffect(() => {
		const loadDocumentCards = async () => {
			const data = await fetchDocuments();
			if (data) {
				setDocumentCards(data.content);
			}
		};

		loadDocumentCards();
	}, []);

	const onCardClick = useCallback((id: string) => {
		setActiveDocumentID(id);
		onDocumentClick(id);
	}, [onDocumentClick]);

	return (
		<ul className='flex flex-col gap-5'>
			{
				documentCards.map(item => (
					<TextCard
						title={item?.title}
						documentID={item?.documentID}
						key={item?.documentID}
						onCardClick={onCardClick}
						active={item?.documentID === activeDocumentID}
					/>
				))
			}
		</ul>
	);
};
