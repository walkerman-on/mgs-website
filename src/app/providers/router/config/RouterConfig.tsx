import { NotFoundPage } from 'pages/not-found';
import { getCranes, getDocuments, getEquipment, getMain, getNotFound } from './routes';
import { AppRoutesProps } from './types';
import { MainPage } from 'pages/main';
import { DocumentsPage } from 'pages/documents';
import { EquipmentPage } from 'pages/equipment';
import { CranesPage } from 'pages/cranes';


export enum AppRoutes {
	ABOUT = "about",
	DOCUMENTS = "documents",
	EQUIPMENT = "equipment",
	CRANES = "cranes",
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: getMain(),
	[AppRoutes.DOCUMENTS]: getDocuments(),
	[AppRoutes.EQUIPMENT]: getEquipment(),
	[AppRoutes.CRANES]: getCranes(),
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
	[AppRoutes.EQUIPMENT]: {
		path: RoutePath.equipment,
		element: <EquipmentPage />,
	},
	[AppRoutes.CRANES]: {
		path: RoutePath.cranes,
		element: <CranesPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
