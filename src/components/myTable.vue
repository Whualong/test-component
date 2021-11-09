<template>
    <div class='main-app'>
        <el-table
      :data="tableData"
      border
      :span-method="arraySpanMethod"
      style="width: 100%; margin-top: 20px">
      <el-table-column
       
        label="部位"
         align='center'
       >
            <el-table-column
                label="部位"
                prop='buwei1'
                align='center'
            >
            </el-table-column>
            <el-table-column
                label="部位"
                prop='buwei2'
                align='center'
            >
            </el-table-column>
      </el-table-column>
    
      <el-table-column
        label="压力(mmHg)"  align='center'>
        <el-table-column
          prop="shoushu"
          align='center'
          label="收/舒"
          width="120">
        </el-table-column>
        <el-table-column
          prop="pinjun1"
          label="平均"
           align='center'
          width="120">
        </el-table-column>
      </el-table-column>

       <el-table-column
        label="血含氧量" align='center'>
        <el-table-column
          prop="nongdu"
          label="百分浓度"
           align='center'
          width="120">
        </el-table-column>
        <el-table-column
          prop="pinjun2"
          label="平均"
           align='center'
          width="120">
        </el-table-column>
      </el-table-column>
<!-- 三列之后input类型处理 -->
      <!-- <el-table-column
        prop="amount1"
        label="数值 1（元）">
            <template slot-scope="scope">
                <div> {{scope.row.amount1}}</div>
                <div></div>
               
            </template>
      </el-table-column>

      <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>

      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column>

      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column> -->

    </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData: [
                {
                    buwei1: '部位1',
                    buwei2: '部位2',
                    shoushu: '收舒',
                    pinjun1: '平均1',
                    nongdu: '浓度',
                    pinjun2:'平均2',
                }, 
        
            ]
        }
    },
    methods:{
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            console.log(row,column,rowIndex,columnIndex)
            
        // if (rowIndex % 2 === 0) {
        //   if (columnIndex === 0) {
        //     return [1, 2];
        //   } else if (columnIndex === 1) {
        //     return [0, 0];
        //   }
        // }
      },

    }
}
</script>

<style scoped>
    .main-app{
        width: 50%;
        margin: auto;
    }
</style>