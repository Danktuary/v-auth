import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes.js';

Vue.use(Router);

const router = new Router({
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const user = localStorage.getItem('user') || {};
	const privateRoutes = routes.filter(route => route.private);

	if (privateRoutes.includes(to.path) && !user.id) {
		return next({ name: 'login' });
	}

	next();
});

export default router;
