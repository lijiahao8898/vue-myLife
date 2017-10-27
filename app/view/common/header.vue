<template>
    <div class="header">
        <ul>
            <li v-for="item in list">
                <router-link :to="item.link">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                list: [{
                    name: '主页',
                    link: '/home'
                }, {
                    name: '列表',
                    link: '/list'
                },{
                    name: '动漫',
                    link: '/dongman'
                }, {
                    name: '美剧',
                    link: '/meiju',
                }, {
                    name: '韩剧',
                    link: '/hanju'
                }, {
                    name: '日剧',
                    link: '/riju'
                }, {
                    name: 'vue拖拽功能',
                    link: '/simple-drap'
                }]
            }
        }
    }
</script>

<style lang="scss" type="text/scss">
    @import "../../style/common/global";

    .header {
        background: $gray;
        ul {
            overflow: hidden;
            li {
                font-size: 12px;
                list-style: none;
                float: left;
                a {
                    color: #fff;
                    text-decoration: none;
                    padding: 10px;
                    display: inline-block;
                }
                a.router-link-active{
                    color: $main-color;
                }
            }
        }
    }
</style>