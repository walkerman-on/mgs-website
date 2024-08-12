import React, { FC, useState } from 'react';
import { Modal } from 'shared/ui/modal';

interface ITextCard {
	title: string,
	id: string
}

export const TextCard: FC<ITextCard> = ({ title, id }) => {
	const [show, setShow] = useState(false)
	const onBtnClick = () => {
		setShow(!show)
	}

	return (
		<>
			<li
				onClick={onBtnClick}
				className='bg-bg-color rounded-lg py-3 px-5 cursor-pointer font-medium hover:bg-color-accent hover:text-bg-color transition duration-300 ease-in-out' key={id}>
				{title}
			</li>
			{/* <Modal show={show} onCloseButtonClick={onBtnClick}>
				hello
			</Modal> */}
		</>
	);
};
