import Home from '@/views/Home.vue';

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
		component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
	},
	{
		path: '/logout',
		name: 'logout',
		private: true,
		component: () => import(/* webpackChunkName: "logout" */ './views/Logout.vue'),
	},
	{
		path: '/threads',
		name: 'threads',
		component: () => import(/* webpackChunkName: "threads" */ './views/Threads.vue'),
	},
	{
		path: '/threads/:id',
		name: 'thread',
		component: () => import(/* webpackChunkName: "thread" */ './views/Thread.vue'),
	},
];
