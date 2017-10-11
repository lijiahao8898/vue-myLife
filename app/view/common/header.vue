<template>
    <div class="header">
        <p>{{name}}</p>
    </div>
</template>

<!--<style lang="scss" scoped="" type="text/scss">-->
    <!--@import "../../style/common/header.scss";-->
<!--</style>-->

<script type="text/babel">
    export default {
        data () {
            return {
                name: '李家豪'
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    .header{
        background: #000;
        p{
            font-size: 24px;
            color: #fff
        }
    }
</style>