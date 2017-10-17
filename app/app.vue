<template>
    <div v-if="completed">
        <!-- app header -->
        <app-header></app-header>

        <app-wrapper :show-info="wrapper"></app-wrapper>
        <!--<app-wrapper v-on:ni-hao="alertNi">-->
            <!--<div class="container">-->
                <!--<Hello></Hello>-->
                <!--<todo></todo>-->
            <!--</div>-->
        <!--</app-wrapper>-->

        <!-- app footer -->
        <card></card>
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
                completed: false
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
            'todo': todo,
            'card': card
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
                console.log('d:' + d.name);
                alert('我是父组件，你好');
            }
        }
    }
</script>