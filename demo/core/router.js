import Vue from 'vue';
import Router from 'vue-router';
import { JWT } from '#/index.js';
import routes from './routes.js';

Vue.use(Router);

const router = new Router({
	base: process.env.BASE_URL,
	routes,
});

const privateRoutes = routes.filter(route => route.private).map(route => route.name);

router.beforeEach((to, from, next) => {
	const user = JSON.parse(localStorage.getItem('v-user')) || {};

	if (privateRoutes.includes(to.name)) {
		if (!user.id) return next({ name: 'login' });

		const jwt = new JWT(user.token);
		if (jwt.expired) return next({ name: 'home' });
	}

	return next();
});

export default router;
