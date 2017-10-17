import Vue from 'vue';
import VueRouter from 'vue-router';

import home from 'vueView/home.vue';
import list from 'vueView/list.vue';

Vue.use(VueRouter);

// 配置路由映射
const router = new VueRouter({
    // mode: 'history',
    routes: [{
        path: '/home',
        component: home
    },{
        path: '/list',
        component: list
    }]
});

export default {
    router: router
}