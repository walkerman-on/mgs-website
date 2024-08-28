import { CranesCards, fetchCranesImg } from 'features/cranes-cards';
import React, { useEffect, useState } from 'react';
import { ImageSlider } from 'shared/ui/img-slider';

const CranesPage = () => {
	const [cranesImg, setCranesImg] = useState([]);

	useEffect(() => {
		const loadInfoCards = async () => {
			const data = await fetchCranesImg();
			if (data) {
				setCranesImg(data);
			}
		};

		loadInfoCards();

	}, []);

	return (
		<main className='content flex flex-col gap-5'>
			{/* <CranesCards /> */}
			{/* <ul className='grid grid-cols-4 gap-5'>
				{
					cranesImg?.map(item => (
						<li className='bg-bg-color p-3 rounded-lg text-center'>
							<img src={item?.imgSRC} alt={item?.description} />
							<span className='text-center font-medium'>{item?.description}</span>
						</li>
					))
				}
			</ul> */}
			<div className='h-1/3'>
				<ImageSlider images={cranesImg?.map(item => item?.imgSRC)} />
			</div>
		</main>
	);
};

export default CranesPage;
