<template>
	<div>
		<h2>{{ thread.name }}</h2>
		Thread ID #{{ thread.id }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tenetur consequatur possimus iusto eveniet sequi minus rerum. Sequi corrupti illum non, voluptatibus minus atque consectetur officia animi aliquid ea excepturi.
	</div>
</template>

<script>
import http from '@/core/http.js';

function handleError(error, next) {
	const { message, response } = error;
	console.error(message || (response && response.data.message));
	next({ name: 'threads' });
}

export default {
	name: 'Thread',

	data() {
		return {
			thread: {},
		};
	},

	async beforeRouteEnter(to, from, next) {
		try {
			const { data } = await http.get(`/threads/${to.params.id}`);
			next(vm => vm.thread = data);
		} catch (error) {
			handleError(error, next);
		}
	},

	async beforeRouteUpdate(to, from, next) {
		try {
			const { data } = await http.get(`/threads/${to.params.id}`);
			this.thread = data;
			next();
		} catch (error) {
			handleError(error, next);
		}
	},
};
</script>

<style scoped>
h2 {
	margin: 0 0 1rem;
}
</style>
