<template>
    <div>
        <span>
            你好，这里是 {{ rot }} 页面！
        </span>
    </div>
</template>

<script type="text/babel">
    export default {
        data () {
            return {
                'rot': 'list'
            }
        }
    }
</script>