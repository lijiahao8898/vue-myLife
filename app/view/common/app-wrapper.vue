<template>
    <div class="app-wrapper" v-show="showInfo" @click="alertHi">
        {{ userName }}
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default {
        props: [
            'showInfo',
            'userName'
        ],

        data() {
            return {
                name: '家豪',
                age: 26
            }
        },

        methods: {
            alertHi: function () {
                console.log(this);
                alert('正在向父组件传递...');
                this.$emit('ni-hao', this.$data)
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    .app-wrapper{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        /* padding-top: 15px; */
        width: 980px;
        margin: 15px auto 0 auto;
    }
</style>