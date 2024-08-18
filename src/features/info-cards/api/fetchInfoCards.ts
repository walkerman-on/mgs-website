import axios from "axios"
import { IData } from "features/document-cards"
import { $api } from "shared/api/api"

export const fetchInfoCards = async (): Promise<IData> => {
	try {
		const response = await $api.get(`/pages/main`)
		const data = response.data

		return data
	} catch (error) {
		console.warn(error)
	}
}