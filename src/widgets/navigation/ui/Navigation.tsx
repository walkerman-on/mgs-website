import React from 'react';
import { NavLink } from 'react-router-dom';
import { getAbout } from 'app/providers/router';

export const Navigation = () => {
	return (
		<nav >
			<ul className="flex gap-16 justify-center">
				<li className="">
					<NavLink to={getAbout()}>
						<h2 className="uppercase font-bold hover:text-color-accent">О компании</h2>
					</NavLink>
				</li>
				<li className="">
					<NavLink to={getAbout()}>
						<h2 className="uppercase font-bold hover:text-color-accent transition duration-300 ease-in-out">Документы</h2>
					</NavLink>
				</li>
				<li className="">
					<NavLink to={getAbout()}>
						<h2 className="uppercase font-bold hover:text-color-accent transition duration-300 ease-in-out">Персонал и оборудование</h2>
					</NavLink>
				</li>
				<li className="">
					<NavLink to={getAbout()}>
						<h2 className="uppercase font-bold hover:text-color-accent transition duration-300 ease-in-out">Обратная связь</h2>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
