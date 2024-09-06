import React, { FC } from 'react';
import { getContacts, getCranes, getDocuments, getEquipment, getMain } from 'app/providers/router';
import { AppLink } from 'shared/ui/app-link';
import { Interface } from 'readline';

interface NavLink {
	title: string;
	link: string;
}

interface INavigation {
	className?: string
}

export const Navigation: FC<INavigation> = ({ className }) => {
	const navLinks: NavLink[] = [
		{ title: "Главная", link: getMain() },
		{ title: "Документы", link: getDocuments() },
		{ title: "Оборудование", link: getEquipment() },
		{ title: "Краны \"Либхер\"", link: getCranes() },
		{ title: "Контакты", link: getContacts() },
	]
	return (
		<nav className={className}>
			<ul className="flex gap-10 justify-center items-center px-5 max-phone:flex-col pt-5 max-phone:gap-5 max-phone:items-start">
				{
					navLinks?.map((item, index) => (
						<li className="text-center" key={index}>
							<AppLink to={item?.link}>
								<h2 className="hover:scale-105 underline-offset-8 transition duration-300 ease-in-out ">{item?.title}</h2>
							</AppLink>
						</li>
					))
				}
			</ul>
		</nav>
	);
};
