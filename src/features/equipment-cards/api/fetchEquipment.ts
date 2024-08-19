import { $api } from "shared/api/api"


export const fetchEquipment = async (): Promise<any> => {
	try {
		const response = await $api.get("/equipment")
		const data = response.data

		return data
	} catch (error) {
		console.warn(error)
	}
}