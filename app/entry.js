import Vue from 'vue';
import Vuex from 'vuex';
import router from './src/router/'

// 默认css
import 'styleScss/common/reset.css'

// elementUI
import './style/theme/index.css'
// import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui';
import {Radio, Loading} from 'element-ui';

import APP from '../app/app.vue';

Vue.use(ElementUI);
Vue.use(Radio);
Vue.use(Loading.directive);
Vue.use(Vuex);

// loading
Vue.prototype.$loading = Loading.service;

const app = new Vue({
    router: router.router,
    render: h => h(APP)
}).$mount('#app');