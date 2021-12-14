<template>
<div class="hello">
    <zy-ring :chartOption="chartOption" width="300px" height="300px" />
</div>
</template>

<script>
import ZyRing from './ZyPie.vue'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        ZyRing,
    },
    data() {
        return {
            chartOption: {
                lineWidth: 20, // 环的宽度
                radius: 50, // 半径
                data: [{
                        color: '#ff599b',
                        shadowColor: 'RGBA(255, 200, 222, 1)',
                        value: 3
                    },
                    {
                        color: '#00E8F1',
                        shadowColor: 'RGBA(191, 249, 252, 1)',
                        value: 12
                    },
                    {
                        color: '#506EFF',
                        shadowColor: 'RGBA(162, 202, 253, 1)',
                        value: 12
                    }
                ]
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
