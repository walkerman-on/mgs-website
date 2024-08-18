import { IDocument } from 'features/document-cards';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const TextCard: FC<IDocument & { active: boolean }> = ({ title, documentID, onCardClick, active }) => {
	const baseStyle = "bg-bg-color rounded-lg py-3 px-5 cursor-pointer font-medium hover:bg-color-accent hover:text-bg-color transition duration-300 ease-in-out";
	const activeStyle = "bg-color-accent text-bg-color";
	const classes = twMerge(baseStyle, active && activeStyle);

	return (
		<li
			onClick={() => onCardClick(documentID)}
			className={classes}
		>
			{title}
		</li>
	);
};
