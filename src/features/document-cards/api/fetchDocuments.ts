import axios from "axios"
import { $api } from "shared/api/api"

export const fetchDocuments = async () => {
	try {
		const response = await $api.get("/pages/documents")
		const data = response.data
		console.log(data)

		return data
	} catch (error) {
		console.warn(error)
	}
}