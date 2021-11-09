<template>
    <div class='main-app'>
        <table cellspacing="0">
            <tr class='table-header'>
                <td colspan="2"  rowspan="2">部    位</td>
                
                <td colspan="2">压力(mmHg)</td>
                
                <td colspan="2">血含氧量</td>
                
            </tr>
            <tr class='table-header'>
                <!-- <td>部位</td>
                <td>部位</td> -->
                <td>收/舒</td>
                <td>平均</td>
                <td>百分浓度</td>
                <td>平均</td>
            </tr>
            <!-- 腔静脉上 -->
            <tr>
                <td rowspan="2">腔静脉</td>
                <td>上</td>
                <template v-for="(item,index) in venaCavaUp">
                    <td :key="item.q_"  v-if='index!=3'>
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                    <td :key="item.q_id" v-else rowspan="2">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>
            <!-- 腔静脉下 -->
            <tr>
                <td>下</td>
                <template v-for="item in venaCavaDown">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>

            <!-- 右心房 -->
            <tr>
                <td colspan="2">右心房</td>
                <template v-for="item in rightAtrium">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>
            <!-- 右心室 -->
            <tr>
                <td colspan="2">右心室</td>
                <template v-for="item in rightVentricle">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>

            <!-- 肺动脉前 -->
            <tr>
                <td rowspan="2">肺动脉</td>
                <td>吸氧前</td>
                <template v-for="item in pulmonaryArteryBefore">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>
            <!-- 肺动脉后 -->
            <tr>
                <!-- <td>右心室</td> -->
                <td>吸氧后</td>
               <template v-for="item in pulmonaryArteryAfter">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>

            <tr>
                <td colspan="2">左心房</td>
                <template v-for="item in leftAtrium">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>
            <tr>
                <td colspan="2">左心室</td>
                <template v-for="item in leftVentricle">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>
            <tr>
                <td colspan="2">升主动脉</td>
                <template v-for="item in ascendingAorta">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>
            <tr>
                <td colspan="2">股动脉</td>
                <template v-for="item in femoralArtery">
                    <td :key="item.q_id">
                        <el-input v-model="item.val" placeholder="请输入内容"></el-input>
                    </td>
                </template>
            </tr>
            

        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //腔静脉上
            venaCavaUp:[
                {q_id: "问题4",name:'',val:'1'},
                {q_id: "问题5",name:'',val:'1'},
                {q_id: "问题7",name:'',val:'1'},
                {q_id: "问题14",name:'平均',val:'1.5'},
            ],
            //腔静脉下
            venaCavaDown:[
                {q_id: "问题10",name:'',val:'2'},
                {q_id: "问题11",name:'',val:'2'},
                {q_id: "问题13",name:'',val:'2'},
            ],
            //右心房
            rightAtrium:[
                {q_id: "问题17",name:'',val:'2'},
                {q_id: "问题18",name:'',val:'2'},
                {q_id: "问题20",name:'',val:'2'},
                {q_id: "问题21",name:'',val:'2'},
            ],
            //右心室
            rightVentricle:[
                {q_id: "问题24",name:'',val:'2'},
                {q_id: "问题25",name:'',val:'2'},
                {q_id: "问题27",name:'',val:'2'},
                {q_id: "问题28",name:'',val:'2'},
            ],
            //肺动脉前
            pulmonaryArteryBefore:[
                {q_id: "问题31",name:'',val:'2'},
                {q_id: "问题32",name:'',val:'2'},
                {q_id: "问题34",name:'',val:'2'},
                {q_id: "问题35",name:'',val:'2'},
            ],
            //肺动脉后
            pulmonaryArteryAfter:[
                {q_id: "问题38",name:'',val:'2'},
                {q_id: "问题39",name:'',val:'2'},
                {q_id: "问题41",name:'',val:'2'},
                {q_id: "问题42",name:'',val:'2'},
            ],
            //左心房
            leftAtrium:[
                {q_id: "问题45",name:'',val:'2'},
                {q_id: "问题46",name:'',val:'2'},
                {q_id: "问题48",name:'',val:'2'},
                {q_id: "问题49",name:'',val:'2'},
            ],
            //左心室
            leftVentricle:[
                {q_id: "问题52",name:'',val:'2'},
                {q_id: "问题53",name:'',val:'2'},
                {q_id: "问题55",name:'',val:'2'},
                {q_id: "问题56",name:'',val:'2'},
            ],
            //升主动脉
            ascendingAorta:[
                {q_id: "问题59",name:'',val:'2'},
                {q_id: "问题60",name:'',val:'2'},
                {q_id: "问题62",name:'',val:'2'},
                {q_id: "问题63",name:'',val:'2'},
            ],
            //股动脉
            femoralArtery:[
                {q_id: "问题66",name:'',val:'2'},
                {q_id: "问题67",name:'',val:'2'},
                {q_id: "问题69",name:'',val:'2'},
                {q_id: "问题70",name:'',val:'2'},
            ]
        }
    }
}
</script>

<style scoped>
.main-app{
        width: 50%;
        margin: auto;
}
table {
    border-collapse:collapse;
}
td{
    border:1px solid #ebeef5;
    transition: background-color .25s ease;
    padding: 12px;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}
tr:hover{
    background-color: #f5f7fa;
}
/deep/.el-input__inner{
    min-width: 100px;
}
</style>