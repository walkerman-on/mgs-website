import { fetchDocumentImgById, IDocumentImgById } from 'features/document-cards';
import React, { useEffect, useState } from 'react';

export const DocumentsCard = () => {
	const [documentImg, setDocumentImg] = useState<IDocumentImgById>(null);
	useEffect(() => {
		const loadDocumentImg = async () => {
			const data = await fetchDocumentImgById("document_3");
			if (data) {
				setDocumentImg(data);
			}
		};

		loadDocumentImg();
	}, []);

	return (
		<>
			<div className={`overflow-y-scroll overflow-x-hidden max-h-svh bg-bg-color p-3 rounded-lg grid place-items-center`}>
				<img src={documentImg?.imgSRC} alt={documentImg?.description} />
			</div>
			{/* <div className='flex flex-col justify-center items-center gap-4'>
					<h2 className="text-xl">Выберите интересующий документ, чтобы ознакомиться с ним</h2>
					<Loader />
				</div> */}
		</>
	);
};
