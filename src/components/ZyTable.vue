<template>
    <div>
        <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <!-- <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template> -->
      <template slot="header">
          <!-- <el-checkbox-group v-model="gender">
                    <el-checkbox label="男"></el-checkbox>
                    <el-checkbox label="女"></el-checkbox>
        </el-checkbox-group> -->
          <my-slot>
              <template>
                  <el-checkbox-group   v-model="gender">
                    <el-checkbox label="男"></el-checkbox>
                    <el-checkbox label="女"></el-checkbox>
                     <el-checkbox label="太监"></el-checkbox>
                </el-checkbox-group>
              </template>
                
               
          </my-slot>
         
      </template>
    </el-table-column>
        </el-table>
        
        <el-checkbox-group   v-model="gender">
                    <el-checkbox label="男"></el-checkbox>
                    <el-checkbox label="女"></el-checkbox>
                     <el-checkbox label="太监"></el-checkbox>
    </el-checkbox-group>
    
    </div>
    
</template>

<script>
import mySlot from './mySlot.vue'
  export default {
      name :'zytable',
    data() {
      return {
          gender:[],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    components:{
        mySlot,
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      testThis(x){
          console.log(this);
          console.log('pp',x)
      }
    },
  }
</script>
