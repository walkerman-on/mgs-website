import { IInfoCard } from 'features/info-cards';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge'

export const InfoCard: FC<IInfoCard> = ({ title, description, id, long, iconURL, drop_down, open }) => {
	const baseStyle = "bg-bg-color rounded-lg py-3 px-5 flex flex-col justify-between"
	const longStyle = "col-span-2"
	const classes = twMerge(baseStyle, long && longStyle)

	return (
		drop_down ?
			<details className='bg-bg-color rounded-lg py-3 px-5' open={open} >
				<summary className='flex flex-col gap-2 cursor-pointer' >
					<p className='flex items-center gap-1'>
						<img src={iconURL} alt={`${title} icon`} height={24} width={24} />
						<h2 className='text-lg text-color-accent font-bold uppercase'>{title}</h2>
					</p>
				</summary>
				<p className='text-base flex flex-col gap-2 py-2'>
					{description.map(item => (
						<h3>{item.paragraph}</h3>
					))}
				</p>
			</details>
			:
			<li className={classes} key={id}>
				<div className='flex flex-col gap-2 '>
					<p className='flex items-center gap-1'>
						<img src={iconURL} alt={`${title} icon`} height={24} width={24} />
						<h2 className='text-lg text-color-accent font-bold uppercase'>{title}</h2>
					</p>
					<p className='text-base flex flex-col gap-2 pb-2'>
						{description.map(item => (
							<h3>{item.paragraph}</h3>
						))}
					</p>
				</div>
			</li>
	);
};
