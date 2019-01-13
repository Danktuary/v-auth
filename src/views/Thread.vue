<template>
	<div>
		Thread ID #{{ thread.id }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tenetur consequatur possimus iusto eveniet sequi minus rerum. Sequi corrupti illum non, voluptatibus minus atque consectetur officia animi aliquid ea excepturi.
	</div>
</template>

<script>
export default {
	name: 'Thread',

	data() {
		return {
			thread: {},
		};
	},

	async mounted() {
		try {
			const { data } = await this.$http.get(`/threads/${this.$route.params.id}`);
			this.thread = data;
		} catch (error) {
			if (error.response.status === 401) {
				this.$router.push({ name: 'threads' });
				return console.error(error.message || error.response.data.message);
			}

			console.error(error);
		}
	},
};
</script>
