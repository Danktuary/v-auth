import Home from '@v/Home.vue';

export default [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/login',
		name: 'login',
		// route level code-splitting
		// this generates a separate chunk (login.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '@v/Login.vue'),
	},
	{
		path: '/logout',
		name: 'logout',
		component: () => import(/* webpackChunkName: "logout" */ '@v/Logout.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import(/* webpackChunkName: "register" */ '@v/Register.vue'),
	},
	{
		path: '/threads',
		name: 'threads',
		component: () => import(/* webpackChunkName: "threads" */ '@v/Threads.vue'),
	},
	{
		path: '/threads/:id',
		name: 'thread',
		component: () => import(/* webpackChunkName: "thread" */ '@v/Thread.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		private: true,
		component: () => import(/* webpackChunkName: "profile" */ '@v/Profile.vue'),
	},
];
