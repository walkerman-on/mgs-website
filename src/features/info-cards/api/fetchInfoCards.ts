import axios from "axios"
import { $api } from "shared/api/api"

export const fetchInfoCards = async () => {
	try {
		const response = await $api.get(`/pages/main`)
		const data = response.data

		return data.content
	} catch (error) {
		console.warn(error)
	}
}