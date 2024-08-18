import axios from "axios"
import { $api } from "shared/api/api"
import { IData, IDocument } from "../types"


export const fetchDocuments = async (): Promise<IData> => {
	try {
		const response = await $api.get("/pages/documents")
		const data = response.data

		return data
	} catch (error) {
		console.warn(error)
	}
}