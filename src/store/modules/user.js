import http from '@/http.js';
import router from '@/router.js';

export default {
	namespaced: true,
	state: JSON.parse(localStorage.getItem('v-user')) || {},
	mutations: {
		clear(state) {
			for (const key of Object.keys(state)) {
				delete state[key];
			}

			localStorage.removeItem('v-user');
		},
		set(state, user) {
			for (const [key, value] of Object.entries(user)) {
				state[key] = value;
			}

			localStorage.setItem('v-user', JSON.stringify(state));
		},
	},
	actions: {
		async login(context, { username, password }) {
			try {
				const { data } = await http.post('/login', { username, password });

				context.commit('set', { ...data.user });
				http.setAuthHeader(data.user.token);
				router.push({ name: 'home' });
			} catch (error) {
				console.error(error);
			}
		},
		logout(context) {
			http.setAuthHeader(null);
			context.commit('clear');
			return Promise.resolve(router.push({ name: 'home' }));
		},
	},
};
