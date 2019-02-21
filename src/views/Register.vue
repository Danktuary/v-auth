<template>
	<form @submit.prevent="register">
		<fieldset>
			<label for="username">Username</label>
			<input id="username" v-model="username" type="text" />
		</fieldset>
		<fieldset>
			<label for="password">Password</label>
			<input id="password" v-model="password" type="password" />
		</fieldset>
		<fieldset>
			<input type="submit" value="Submit" />
		</fieldset>
	</form>
</template>

<script>
export default {
	name: 'Profile',

	data() {
		return {
			username: '',
			password: '',
		};
	},

	methods: {
		register() {
			console.log('todo');
		},
	},
};
</script>
