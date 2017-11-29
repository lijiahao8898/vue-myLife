<template>
    <div v-if="completed">
        <!-- app header -->
        <app-header></app-header>

        <app-wrapper :show-info="wrapper" :user-name="userName" v-on:ni-hao="alertNi"></app-wrapper>

        <!-- app footer -->
        <app-footer></app-footer>
    </div>
</template>

<script type="text/babel">
    import Vue from 'vue';
    // 功能组件
    import Hello from 'vueView/hello';
    import todo from 'vueView/todo.vue';
    // 公共组件
    import top from 'vueView/common/header.vue';
    import wrapper from 'vueView/common/app-wrapper.vue';
    import footer from 'vueView/common/footer.vue';
    import card from 'vueView/component/card.vue'

    let loading;
    export default {
        data () {
            return {
                wrapper: false,
                completed: false,
                userName: '李家豪'
            }
        },
        created: () => {
            loading = Vue.prototype.$loading({text: '玩命加载中>.<...'});
        },
        mounted: function () {
            this.clear();
        },
        components: {
            'app-header': top,
            'app-footer': footer,
            'app-wrapper': wrapper,
            'Hello': Hello,
            'todo': todo
        },
        methods: {
            clear: function () {
                let that = this;
                setTimeout(function () {
                    loading.close();
                    that.completed = true;
                    that.wrapper = true;
                }, 800);
            },
            alertNi: function (d) {
                console.log('名字' + d.name + '年龄：' + d.age);
                alert('我是父组件，你好。收到你的名字' + d.name + '年龄：' + d.age);
            }
        }
    }
</script>