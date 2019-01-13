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
		set(state, { user }) {
			for (const [key, value] of Object.entries(user)) {
				state[key] = value;
			}

			localStorage.setItem('v-user', JSON.stringify(user));
		},
	},
};
