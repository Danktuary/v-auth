import Vue from 'vue';

import App from './App.vue';
import http from './http.js';
import router from './router.js';
import store from './store/index.js';

Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
