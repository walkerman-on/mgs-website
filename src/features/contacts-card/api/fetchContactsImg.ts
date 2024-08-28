import { $api } from "shared/api/api"


export const fetchContactsImg = async (): Promise<any> => {
	try {
		const response = await $api.get("/contacts")
		const data = response.data

		return data
	} catch (error) {
		console.warn(error)
	}
}
