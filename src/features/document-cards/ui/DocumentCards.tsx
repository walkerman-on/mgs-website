import { TextCard } from 'entities/text-card';
import React, { useEffect, useState } from 'react';
import { fetchDocuments } from '../api/fetchDocuments';

const documents = [
	{ paragraph: "Свидетельство о типовом одобрении (СТО) на изготовление РВД для подачи жидкостей под высоким давлением в судовых системах, выданное РМРС", id: "IW2T" },
	{ paragraph: "Технические условия на изготовление РВД, одобренное РМРС", id: "Wrtl" },
	{ paragraph: "Программа испытаний РВД, одобренное РМРС", id: "uFzu" },
	{ paragraph: "Свидетельство о признании РКО на изготовление РВД", id: "vE9Q" },
	{ paragraph: "Технические условия на изготовление РВД, одобренные РКО", id: "Lr5H" },
]

export const DocumentCards = () => {
	const [documentCards, setDocumentCards] = useState([]);

	useEffect(() => {
		const loadDocumentCards = async () => {
			const data = await fetchDocuments();
			if (data) {
				setDocumentCards(data);
			}
		};

		loadDocumentCards();
	}, []);

	console.log(documentCards)

	return (
		<ul className='flex flex-col gap-5'>
			{
				documents?.map(item => (
					<TextCard title={item?.paragraph} id={item?.id} />
				))
			}
		</ul>
	);
};
