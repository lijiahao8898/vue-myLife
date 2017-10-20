<template>
    <div>
        <span>
            你好，这里是 {{ rot }} 页面！
        </span>
        <card></card>
    </div>
</template>

<script type="text/babel">
    import card from 'vueView/component/card.vue'
    export default {
        data () {
            return {
                'rot': 'list'
            }
        },
        components: {
            'card': card
        }
    }
</script>