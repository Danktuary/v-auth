import Vue from 'vue';
import VAuth from '#/index.js';
import App from './App.vue';
import router from './core/router.js';
import store from './store/index.js';

Vue.use(VAuth);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
