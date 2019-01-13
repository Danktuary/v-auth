<script>
export default {
	name: 'Logout',

	mounted() {
		this.$store.dispatch('user/logout', this);
	},

	render: () => null,
};
</script>
