<script>
import http from '@/core/http.js';
import router from '@/core/router.js';
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
