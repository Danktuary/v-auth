export default {
	namespaced: true,
	state: JSON.parse(localStorage.getItem('v-user')),
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
		async login(context, { http, username, password }) {
			try {
				const { data } = await http.post('/login', { username, password });

				http.setAuthHeader(data.user.token);
				context.commit('set', { ...data.user });
			} catch (error) {
				console.error(error);
			}
		},
		logout(context, { http }) {
			http.setAuthHeader(null);
			return Promise.resolve(context.commit('clear'));
		},
	},
};
