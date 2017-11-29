<template>
    <div class="footer">
        <p>{{ copyright }}</p>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                copyright: '杭州纷享汇电子商务有限公司提供技术支持'
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    .footer{
        margin-top: 100px;
        p{
            text-align: center;
            font-size: 12px;
        }
    }
</style>