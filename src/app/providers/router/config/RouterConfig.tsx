import { NotFoundPage } from 'pages/not-found';
import { getAbout, getMain, getNotFound } from './routes';
import { AppRoutesProps } from './types';
import { MainPage } from 'pages/main';


export enum AppRoutes {
	ABOUT = "about",
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: getMain(),
	[AppRoutes.NOT_FOUND]: getNotFound(),
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <MainPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
