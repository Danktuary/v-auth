<template>
	<div>
		<form action="/login" method="post" @submit.prevent="login({ username, password })">
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
import { mapActions } from 'vuex';

export default {
	name: 'Login',

	data() {
		return {
			username: '',
			password: '',
		};
	},

	methods: mapActions('user', ['login']),

	beforeRouteEnter(to, from, next) {
		next(vm => {
			const { user } = vm.$store.state;
			if (user && user.token) {
				console.log('You\'re already logged in.');
				vm.$router.push({ name: 'home' });
			}
		});
	},
};
</script>
