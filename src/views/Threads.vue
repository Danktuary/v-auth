<template>
	<div>
		<ul v-if="threads.length">
			<li v-for="thread in threads" :key="thread.id">
				<router-link :to="{ name: 'thread', params: { id: thread.id }}">
					#{{ thread.id }}: {{ thread.name }}
					<span v-if="thread.private">[private]</span>
				</router-link>
			</li>
		</ul>
		<span v-else>No threads yet.</span>
	</div>
</template>

<script>
import http from '@/core/http.js';

export default {
	name: 'Threads',

	data() {
		return {
			threads: [],
		};
	},

	async beforeRouteEnter(to, from, next) {
		try {
			const { data } = await http.get('/threads');
			next(vm => vm.threads = data);
		} catch (error) {
			next();
			console.error(error);
		}
	},
};
</script>
