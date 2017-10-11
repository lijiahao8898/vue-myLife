<template>
    <div class="footer">
        <p>{{ name }}</p>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                name: '李家豪'
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    .footer{
        background: #ccc;
        p{
            text-align: center;
            font-size: 12px;
        }
    }
</style>