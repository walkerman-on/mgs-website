import React from 'react';
import { getAbout, getDocuments, getFeedback, getMain, getStaffAndEquipment } from 'app/providers/router';
import { AppLink } from 'shared/ui/app-link';

interface NavLink {
	title: string;
	link: string;
}

export const Navigation = () => {
	const navLinks: NavLink[] = [
		{ title: "Главная", link: getMain() },
		{ title: "О компании", link: getAbout() },
		{ title: "Персонал и оборудование", link: getStaffAndEquipment() },
		{ title: "Документы", link: getDocuments() },
		{ title: "Обратная связь", link: getFeedback() },
	]
	return (
		<nav className='pb-4 px-10'>
			<ul className="flex gap-16 justify-center items-center">
				{
					navLinks?.map((item, index) => (
						<li className="text-center" key={index}>
							<AppLink to={item?.link}>
								<h2 className="uppercase font-bold hover:text-color-accent transition duration-300 ease-in-out">{item?.title}</h2>
							</AppLink>
						</li>
					))
				}
			</ul>
		</nav>
	);
};
