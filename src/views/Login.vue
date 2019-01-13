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
				<input type="button" value="Logout" @click="logout" />
			</div>
		</form>
	</div>
</template>

<script>
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
			try {
				const { data } = await this.$http.post('/login', {
					username: this.username,
					password: this.password,
				});

				this.$store.commit('user/set', { user: data.user });
			} catch (error) {
				console.error(error);
			}
		},
		logout() {
			this.$store.commit('user/clear');
		},
	},
};
</script>
