export interface IInfoCard {
	title: string,
	description: { paragraph: string, id: string }[],
	id: string,
	long: boolean,
	iconID?: string,
	iconURL: string
}