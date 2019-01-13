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
			await this.$store.dispatch('user/login', {
				http: this.$http,
				username: this.username,
				password: this.password,
			});

			this.$router.push({ name: 'home' });
		},
		async logout() {
			await this.$store.dispatch('user/logout', { http: this.$http });
			this.$router.push({ name: 'home' });
		},
	},
};
</script>
