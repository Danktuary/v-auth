<template>
	<div>
		<ul>
			<li v-for="thread in threads" :key="thread.id">
				<router-link :to="{ name: 'thread', params: { id: thread.id }}">
					#{{ thread.id }}: {{ thread.name }}
					<span v-if="thread.private">[private]</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import http from '@/http.js';

export default {
	name: 'Threads',

	data() {
		return {
			threads: [],
		};
	},

	async mounted() {
		const { data } = await http.get('/threads');
		this.threads = data;
	},
};
</script>
