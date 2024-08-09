import { NotFoundPage } from 'pages/not-found';
import { getAbout, getDocuments, getMain, getNotFound } from './routes';
import { AppRoutesProps } from './types';
import { MainPage } from 'pages/main';
import { DocumentsPage } from 'pages/documents';


export enum AppRoutes {
	ABOUT = "about",
	DOCUMENTS = "documents",
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: getMain(),
	[AppRoutes.DOCUMENTS]: getDocuments(),
	[AppRoutes.NOT_FOUND]: getNotFound(),
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <MainPage />,
	},
	[AppRoutes.DOCUMENTS]: {
		path: RoutePath.documents,
		element: <DocumentsPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
