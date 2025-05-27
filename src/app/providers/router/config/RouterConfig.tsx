import { NotFoundPage } from 'pages/not-found';
import {getContacts, getCranes, getDocuments, getEmissionControl, getEquipment, getMain, getNotFound} from './routes';
import { AppRoutesProps } from './types';
import { MainPage } from 'pages/main';
import { DocumentsPage } from 'pages/documents';
import { EquipmentPage } from 'pages/equipment';
import { CranesPage } from 'pages/cranes';
import { ContactsPage } from 'pages/contacts';
import { EmissionControlPage} from "pages/emission-control";


export enum AppRoutes {
	ABOUT = "about",
	DOCUMENTS = "documents",
	EQUIPMENT = "equipment",
	CRANES = "cranes",
	CONTACTS = "contacts",
	NOT_FOUND = 'not_found',
	EMISSION_CONTROL = 'emission_control',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.ABOUT]: getMain(),
	[AppRoutes.DOCUMENTS]: getDocuments(),
	[AppRoutes.EQUIPMENT]: getEquipment(),
	[AppRoutes.CRANES]: getCranes(),
	[AppRoutes.CONTACTS]: getContacts(),
	[AppRoutes.NOT_FOUND]: getNotFound(),
	[AppRoutes.EMISSION_CONTROL]: getEmissionControl(),
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
	[AppRoutes.CONTACTS]: {
		path: RoutePath.contacts,
		element: <ContactsPage />,
	},
	[AppRoutes.EMISSION_CONTROL]: {
		path: RoutePath.emission_control,
		element: <EmissionControlPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
