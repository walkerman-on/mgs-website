export interface IData {
	id: string,
	content: IDocument[]
}

export interface IDocumentImgById {
	imgSRC: string,
	id: string,
	description: string
}

export interface IDocument {
	documentID: string,
	iconID?: string,
	title: string,
	imgSRC?: string,
	description?: [
		{
			paragraph: string,
			id: string
		}
	],
	onCardClick?: (id: string) => void
}