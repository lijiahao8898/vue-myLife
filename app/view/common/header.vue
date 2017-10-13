<template>
    <div class="header">
        <ul>
            <li v-for="item in list"><a href="#">{{ item.name }}</a></li>
        </ul>
    </div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                list: [{
                    name: "动漫"
                },{
                    name: "美剧"
                },{
                    name: "韩剧"
                },{
                    name: "日剧"
                }]
            }
        }
    }
</script>

<style lang="scss" type="text/scss">
    @import "../../style/common/global";
    .header{
        background: $gray;
        ul{
            overflow: hidden;
            li{
                font-size: 12px;
                list-style: none;
                float: left;
                a{
                    color: #fff;
                    text-decoration: none;
                    padding: 10px 5px;
                    display: inline-block;
                }
            }
        }
    }
</style>