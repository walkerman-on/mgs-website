import axios from 'axios';

const __API__ = 'https://mgs-server.vercel.app'; // Используйте относительный путь

export const $api = axios.create({
	baseURL: __API__,
});
