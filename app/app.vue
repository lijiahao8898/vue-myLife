<template>
    <div>
        <router-link to="/home">home</router-link>
        <router-link to="/list">list</router-link>
        <router-view></router-view>
        <app-wrapper :show-info="isShowWrapper" v-on:ni-hao="alertNi">
            <!--<app-wrapper>-->
            <app-header></app-header>

            <div class="container">
                <Hello></Hello>
                <todo></todo>
            </div>
            <app-footer></app-footer>
        </app-wrapper>
    </div>
</template>

<script type="text/babel">
    import Vue from 'vue';
    // 功能组件
    import Hello from 'vueView/hello';
    import todo from 'vueView/todo.vue';
    // 公共组件
    import wrapper from 'vueView/common/app-wrapper.vue';
    import top from 'vueView/common/header.vue';
    import footer from 'vueView/common/footer.vue';
    //import 'styleScss/common/common.css'

    let lo;
    export default {
        data () {
            return {
                isShowWrapper: false
            }
        },
        created: () => {
            lo = Vue.prototype.$loading({text: '死命加载中...'});
        },
        mounted: function () {
            this.loadingClose();
        },
        components: {
            'app-header': top,
            'app-footer': footer,
            'app-wrapper': wrapper,
            'Hello': Hello,
            'todo': todo
        },
        methods: {
            loadingClose: function () {
                let that = this;
                setTimeout(function () {
                    lo.close();
                    that.isShowWrapper = true;
                }, 1000);
            },
            alertNi: function (d) {
                console.log('d:' + d.name);
                alert('我是父组件，你好');
            }
        }
    }
</script>