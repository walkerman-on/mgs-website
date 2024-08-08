import { NotFoundPage } from 'pages/not-found';
import { getAbout, getNotFound } from './routes';
import { AppRoutesProps } from './types';
import { AboutPage } from 'pages/about';


export enum AppRoutes {
	ABOUT = "about",
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: getAbout(),
	[AppRoutes.NOT_FOUND]: getNotFound(),
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.ABOUT]: {
		path: RoutePath.not_found,
		element: <AboutPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
