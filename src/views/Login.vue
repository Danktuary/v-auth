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
export default {
	name: 'Login',

	data() {
		return {
			username: '',
			password: '',
		};
	},

	methods: {
		login() {
			console.log('Username/password:', `${this.username} - ${this.password}`);
		},
	},
};
</script>
