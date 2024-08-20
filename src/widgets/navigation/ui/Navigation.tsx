import React from 'react';
import { getContacts, getCranes, getDocuments, getEquipment, getMain } from 'app/providers/router';
import { AppLink } from 'shared/ui/app-link';

interface NavLink {
	title: string;
	link: string;
}

export const Navigation = () => {
	const navLinks: NavLink[] = [
		{ title: "Главная", link: getMain() },
		{ title: "Документы", link: getDocuments() },
		{ title: "Оборудование", link: getEquipment() },
		{ title: "Краны \"Либхер\"", link: getCranes() },
		{ title: "Контакты", link: getContacts() },
	]
	return (
		<nav className='pb-4 px-10'>
			<ul className="flex gap-16 justify-center items-center max-tablet:gap-4 max-phone:grid max-phone:grid-cols-2 max-phone:grid-rows-2 max-phone:gap-1">
				{
					navLinks?.map((item, index) => (
						<li className="text-center" key={index}>
							<AppLink to={item?.link}>
								<h2 className="uppercase font-bold  hover:text-color-accent transition duration-300 ease-in-out">{item?.title}</h2>
							</AppLink>
						</li>
					))
				}
			</ul>
		</nav>
	);
};
