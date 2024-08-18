import { $api } from "shared/api/api"
import { IDocumentImgById } from "../types"

export const fetchDocumentImgById = async (documentID: string): Promise<IDocumentImgById> => {
	try {
		const response = await $api.get(`/documents/${documentID}`)
		const data = response.data

		return data
	} catch (error) {
		console.warn(error)
	}
}