import { $api } from "shared/api/api"


interface Icon {
	id: string;
	path: string;
}

interface Description {
	paragraph: string;
	id: string;
	iconID: string;
	iconsSRC?: string;
}

interface ContentItem {
	id: string;
	title: string;
	description: Description[];
	long: boolean;
	iconID: string;
	iconsSRC?: string; // Добавляем новый ключ
}

interface PageContent {
	id: string;
	content: ContentItem[];
}



export const fetchCranesCards = async (): Promise<PageContent | undefined> => {
	try {
		// Загружаем данные о контенте и иконках
		const [responseContent, responseIcons] = await Promise.all([
			$api.get('/pages/cranes'),
			$api.get('/icons'),
		]);

		const content: PageContent = responseContent.data;
		const icons: Icon[] = responseIcons.data;

		// Создаем словарь для поиска путей иконок по ID
		const iconMap = icons.reduce((map: Record<string, string>, icon: Icon) => {
			map[icon.id] = icon.path;
			return map;
		}, {});

		// Добавляем новый ключ iconsSRC
		content.content.forEach((item) => {
			if (item.iconID) {
				item.iconsSRC = iconMap[item.iconID] || '';
			}
			item.description.forEach((desc) => {
				if (desc.iconID) {
					desc.iconsSRC = iconMap[desc.iconID] || ''; // Если нужно добавить для описаний
				}
			});
		});

		return content;
	} catch (error) {
		console.warn(error);
	}
};
