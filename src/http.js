import axios from 'axios';

const token = localStorage.getItem('v-token');
const http = axios.create({ baseURL: 'http://localhost:4242' });

if (token) {
	http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default http;
