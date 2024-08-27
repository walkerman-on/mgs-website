import { $api } from "shared/api/api"


export const fetchCranesImg = async (): Promise<any> => {
	try {
		const response = await $api.get("/cranes")
		const data = response.data

		return data
	} catch (error) {
		console.warn(error)
	}
}
