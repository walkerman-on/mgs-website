export interface IInfoCard {
	title: string,
	description: { paragraph: string, id: string }[],
	id: string,
	long: boolean,
	drop_down?: boolean,
	open?: boolean,
	iconID?: string,
	iconURL: string
}