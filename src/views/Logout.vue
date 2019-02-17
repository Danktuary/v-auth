<script>
import http from '@/http.js';
import router from '@/router.js';
import util from '@/util/index.js';

export default {
	name: 'Logout',

	mounted() {
		http.setAuthHeader(null);
		this.$store.commit('user/clear');
		util.alerts.display('Successfully logged out.');
		return router.push({ name: 'home' });
	},

	render: () => null,
};
</script>
