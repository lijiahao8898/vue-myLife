import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// elementUI
import './style/theme/index.css'
// import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui';
import {Radio, Loading} from 'element-ui';

import APP from '../app/app.vue';
import home from 'vueView/home.vue';
import list from 'vueView/list.vue';

import indexjs from './src/index.js';

Vue.use(ElementUI);
Vue.use(Radio);
Vue.use(Loading.directive);
Vue.use(VueRouter);
Vue.use(Vuex);

// loading
Vue.prototype.$loading = Loading.service;



// 配置路由映射
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/home',
        component: home
    },{
        path: '/list',
        component: list
    }]
});

const app = new Vue({
    router: router,
    render: h => h(APP)
}).$mount('#app');