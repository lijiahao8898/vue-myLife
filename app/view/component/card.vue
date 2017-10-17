<template>
    <el-row>
        <el-col :span="6" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px'}">
                <div style="padding: 14px;">
                    <img :src="img" class="image">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script type="text/babel">
    import imgSrc from "../../style/image/1.jpg"
    export default {
        data() {
            return {
                currentDate: new Date(),
                img: imgSrc
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped="">
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>