import React, { FC, useState } from 'react';
import CloseIcon from 'shared/assets/icons/CloseIcon';
import { twMerge } from 'tailwind-merge'
import { Navigation } from 'widgets/navigation';

interface ISwipeMenu {
	closed: boolean,
	onClick: () => void
}

export const SwipeMenu: FC<ISwipeMenu> = ({ closed, onClick }) => {
	const baseStyle = "fixed bg-bg-color z-50 top-0 right-0 h-full transition duration-300 ease-in-out flex flex-col shadow-xl"
	const openStyle = "hidden "

	const classes = twMerge(baseStyle, closed && openStyle)
	return (
		<div className={classes}>
			<div className=' '>
				<button className='bg-bg-color' onClick={onClick}>
					<CloseIcon />
				</button>
				<Navigation />
			</div>
		</div>

	);
};