import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

interface IAppLink {
	to: string;
	children: JSX.Element;
}

export const AppLink: FC<IAppLink> = memo(({ children, to }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? "text-bg-color font-medium"
					: "text-color-gray font-medium opacity-80"
			}
		>
			{children}
		</NavLink>
	);
});
