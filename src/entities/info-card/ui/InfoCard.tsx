import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from 'shared/assets/icons/ArrowRightIcon';
import { twMerge } from 'tailwind-merge'

interface IInfoCard {
	title: string,
	description: { paragraph: string }[],
	id: string,
	long: boolean,
	iconURL: string,
	linkTo?: string
}

export const InfoCard: FC<IInfoCard> = ({ title, description, id, long, linkTo, iconURL }) => {
	const baseStyle = "bg-bg-color rounded-lg py-3 px-5 flex flex-col justify-between"
	const longStyle = "col-span-2"
	const classes = twMerge(baseStyle, long && longStyle)

	return (
		<li className={classes} key={id}>
			<div className='flex flex-col gap-2 '>
				<p className='flex items-center gap-1'>
					{/* <img src={iconURL} alt={`${title} icon`} /> */}
					<h2 className='text-lg text-color-accent font-bold uppercase'>{title}</h2>
				</p>
				<p className='text-base flex flex-col gap-2 pb-2'>
					{description.map(item => (
						<h3>{item.paragraph}</h3>
					))}
				</p>
			</div>
			<Link to={linkTo}>
				<p className='flex items-center gap-1 hover:opacity-80 transition duration-300 ease-in-out'>
					<h4 className='cursor-pointer text-color-accent font-medium'>Подробнее</h4>
					<ArrowRightIcon />
				</p>
			</Link>
		</li>
	);
};
