<template>
    <div class="itxst">
        <div>鼠标移动到加号上面才允许拖动</div>
        <div class="col">
            <draggable  :force-fallback="true"  handle=".mover" v-model="arr1" :disabled="disabled" animation="300" @start="onStart" @end="onEnd">
                <transition-group>
                    <div class="item" v-for="item in arr1" :key="item.id"><span class="mover">+</span>{{item.name}}</div>
                </transition-group>
            </draggable>
        </div>
    </div>
</template>


<script>
import draggable from 'vuedraggable'
export default {
    components: {draggable},
    data() {
                return {
                    disabled: false,
                    //定义要被拖拽对象的数组
                    arr1: [
                        { id: 1, name: 'www.itxst.com' },
                        { id: 2, name: 'www.jd.com' },
                        { id: 3, name: 'www.baidu.com' },
                        { id: 4, name: 'www.taobao.com' }
                    ]
                };
            },
            methods: {
                //设置禁止拖拽
                setJY() {
                    this.disabled = true;
                },
                //设置启用拖拽
                setQY() {
                    this.disabled = false;
                },
                onStart() {
                    this.drag = true;
                },
                //拖拽结束事件
                onEnd() {
                    this.drag = false;

                },
                triggerEvent(){
                    let e = new Event
                }
            },
}
</script>


<style lang="less" scoped>
.itxst {
    user-select: none;
                margin: 10px;
            }
            .col {
                width: 80%;
                flex: 1;
                padding: 10px;
                border: solid 1px #eee;
                border-radius: 5px;
                float: left;
            }
            .col + .col {
                margin-left: 10px;
            }
            .item {
                padding: 6px 12px;
                margin: 0px 10px 0px 10px;
                border: solid 1px #eee;
                background-color: #f1f1f1;
            }
            .item + .item {
                border-top: none;
                margin-top: 6px;
            }
      
            .mover {
                background-color: #fdfdfd;
                cursor: move;
                padding:3px 6px;
            }
</style>
