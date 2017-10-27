<template>
    <div class="vue-component">
        <div v-for="list in lists">
            <vddl-list :list="list" :horizontal="false" :dragover="dragover"  :inserted="inserted">
                <vddl-draggable v-for="(item, index) in list" :key="item.id" :draggable="item" :index="index"
                                :wrapper="list" effect-allowed="copy"
                                :dragstart="dragstart" :dragend="dragend" :selected="selected">
                    {{item.name}}{{index}}
                </vddl-draggable>
                <vddl-placeholder class="red">Custom placeholder</vddl-placeholder>
            </vddl-list>
        </div>
    </div>
</template>

<script type="text/babel">
    //import VddlList from "../../node_modules/vddl/src/components/vddl-list.vue";
    //import VddlDraggable from "../../node_modules/vddl/src/components/vddl-draggable.vue";

    export default {
//        components: {
//            VddlDraggable,
//            VddlList
//        },
        data() {
            return {
                "lists": {
                    "A": [
                        {
                            "id": 1,
                            "name": "A-vddl-1",
                            "content": "你好1"
                        },
                        {
                            "id": 2,
                            "name": "A-vddl-2",
                            "content": "你好2"
                        }
                    ],
                    "B": [
                        {
                            "id": 3,
                            "name": "B-vddl-1",
                            "content": "你好3"
                        },
                        {
                            "id": 4,
                            "name": "B-vddl-2",
                            "content": "你好3"
                        }
                    ]
                }
            }
        },
        methods: {
            dragover(event, index, type, external) {
                console.log(index);
            },
            dropHandle(event, index, item, type, external) {
                console.log(item);
            },
            inserted (data) {
                console.log(data)
            },
            moved() {
                console.log('moved');
            },
            cancelled() {
                console.log('cancelled');
            },
            dragstart(item) {
                console.log('dragstart：');
            },
            dragend(item) {
                console.log('dragend：');
            },
            selected(item) {
                console.log('selected' + item)
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped="">
    .vue-component {
        overflow: hidden;
        .vddl-list {
            min-height: 44px;
            position: relative;
            float: left;
            width: 50%;
            padding: 10px;
            text-align: center;
            .vddl-draggable {
                position: relative;
                height: 30px;
                line-height: 30px;
                border: 1px solid #8c939d;
                margin: 10px 0;
            }
        }
    }

    .vddl-dragging {
        opacity: 0.7;
    }

    .vddl-dragging-source {
        display: none;
    }
</style>