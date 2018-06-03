import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import VueResource from 'vue-resource';
import store from './store/store.js';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

