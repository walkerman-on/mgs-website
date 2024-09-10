import React, { FC } from 'react';
import { getContacts, getCranes, getDocuments, getEquipment, getMain } from 'app/providers/router';
import { AppLink } from 'shared/ui/app-link';

interface NavLink {
	title: string;
	link: string;
}

interface INavigation {
	className?: string;
}

export const Navigation: FC<INavigation> = ({ className }) => {
	const navLinks: NavLink[] = [
		{ title: "Главная", link: getMain() },
		{ title: "Документы", link: getDocuments() },
		{ title: "Оборудование", link: getEquipment() },
		{ title: "Краны \"Либхер\"", link: getCranes() },
		{ title: "Контакты", link: getContacts() },
	];

	return (
		<nav className={className}>
			<ul className="flex gap-10 justify-center items-center px-5 max-phone:flex-col pt-5 max-phone:gap-5 max-phone:items-start max-tablet:flex-col pt-5 max-tablet:gap-5 max-tablet:items-start max-desktop:flex-col max-desktop:gap-5 max-desktop:items-start">
				{
					navLinks?.map((item, index) => (
						<li className="text-center" key={index}>
							<AppLink to={item?.link} >
								<h2 className="hover:scale-105 underline-offset-8 transition duration-300 ease-in-out max-phone:text-color-accent max-tablet:text-color-accent max-laptop:text-color-accent">
									{item?.title}
								</h2>
							</AppLink>
						</li>
					))
				}
			</ul>
		</nav>
	);
};
