import { useDocument } from 'app/providers/document-provider';
import { fetchDocumentImgById, IDocumentImgById } from 'features/document-cards';
import { useEffect, useState } from 'react';
import { Loader } from 'shared/ui/loader';

export const DocumentsCard = () => {
	const { documentID } = useDocument()

	const [documentImg, setDocumentImg] = useState<IDocumentImgById>(null);
	useEffect(() => {
		const loadDocumentImg = async () => {
			if (documentID !== null) {
				const data = await fetchDocumentImgById(documentID);
				setDocumentImg(data);
			}
		};

		loadDocumentImg();
	}, [documentID]);

	return (
		<>
			{
				documentImg ?
					<div className={`text-center overflow-y-scroll overflow-x-hidden max-h-svh bg-bg-color p-3 rounded-xl`}>
						<img src={documentImg?.imgSRC} alt={documentImg?.description} />
					</div>
					:
					<div className='flex flex-col justify-center items-center gap-4'>
						<h2 className="text-xl">Выберите интересующий документ, чтобы ознакомиться с ним</h2>
						<Loader />
					</div>
			}
		</>
	);
};
