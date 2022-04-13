<template>
<div class="hello">
    <!-- <rili  />
    <zy-ring v-if="true" :chartOption="chartOption" width="300px" height="300px" />
     <div class="paper">我法拉利撒娇的立法将撒旦法富士达的</div> -->
    <my-slot>
        <template slot="test" slot-scope="person">
           测试腹肌
           <div @click="test">123</div>
        </template>
    </my-slot>
</div>
</template>

<script>
import ZyRing from './ZyPie.vue'


import Rili from './rili.vue'
import mySlot from './mySlot.vue'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        ZyRing,
        Rili,
        mySlot
    },
    data() {
        return {
            person:{
                name : '负极',
                age : 99999
            },
            chartOption: {
                lineWidth: 50, // 环的宽度
                radius: 100, // 半径
                data: [
                    {
                        color: '#ff599b',
                        shadowColor: 'RGBA(255, 200, 222, 1)',
                        value: 50
                    },
                    {
                        color: '#00E8F1',
                        shadowColor: 'RGBA(191, 249, 252, 1)',
                        value: 120
                    },
                    {
                        color: '#506EFF',
                        shadowColor: 'RGBA(162, 202, 253, 1)',
                        value: 100
                    }
                ]
            }
        }
    },
    methods: {
        test() {
            console.log(this)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.paper{
    margin-left: 100px;
    overflow: hidden;
    width: 34ch;
    white-space: nowrap;
    animation: typing 2s steps(20),printing 0.5s step-end infinite alternate;
    border-right: 1px solid black;
}
@keyframes typing {
    from{
        width:0;
    }
}
@keyframes printing {
    50%{
        border-color:transparent;

    }
}
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
