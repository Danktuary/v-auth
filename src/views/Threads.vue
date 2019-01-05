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
export default {
	name: 'Threads',

	data() {
		return {
			threads: [
				{
					id: 1,
					name: 'Hi, I\'m new',
				},
				{
					id: 2,
					name: 'Hi, I\'m new 2',
				},
				{
					id: 3,
					name: 'Hi, I\'m new 3',
					private: true,
				},
			],
		};
	},
};
</script>
