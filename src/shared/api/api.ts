import axios from 'axios';

const __API__ = '/api'; // Используйте относительный путь

export const $api = axios.create({
	baseURL: __API__,
});
