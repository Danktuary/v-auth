<template>
	<div>
		<form action="/login" method="post" @submit.prevent="login">
			<div>
				<label for="username">Username:</label>
				<input id="username" v-model="username" type="text" />
			</div>
			<div>
				<label for="password">Password:</label>
				<input id="password" v-model="password" type="password" />
			</div>
			<div>
				<input type="submit" value="Submit" />
			</div>
		</form>
	</div>
</template>

<script>
import http from '@/core/http.js';
import router from '@/core/router.js';
import util from '@/util/index.js';

export default {
	name: 'Login',

	data() {
		return {
			username: '',
			password: '',
		};
	},

	methods: {
		async login() {
			const { username, password } = this;

			try {
				const { data } = await http.post('/login', { username, password });

				this.$store.commit('user/set', { ...data.user });
				util.alerts.display('Successfully logged in!');

				http.setAuthHeader(data.user.token);
				router.push({ name: 'home' });
			} catch (error) {
				console.error(error);
			}
		},
	},

	beforeRouteEnter(to, from, next) {
		next(vm => {
			const { user } = vm.$store.state;
			if (user && user.token) {
				util.alerts.display('You\'re already logged in.');
				vm.$router.push({ name: 'home' });
			}
		});
	},
};
</script>
