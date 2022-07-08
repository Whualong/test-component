<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-08 12:38:42
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-08 13:28:53
 * @FilePath: /eleapp/src/components/tabs.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div>
        <van-tabs  v-if="show" v-model="vantActive" :lazy-render="true" ref="tabs">
            <van-tab :title="item.name" v-for="(item,index) in tabs" :key="item.id"> {{index}}</van-tab>
            
        </van-tabs>
        <button @click="sortTabs"> 切换顺序 </button>

        <el-tabs v-model="active">
            <el-tab-pane :label="item.name" :name="item.name" v-for="(item,index) in tabs" :key="item.id">{{index}}</el-tab-pane>
           
        </el-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return{
            vantActive:0,
            active:'测试11',
            tabs:[
                {
                    id:11,
                    name: '测试11'
                },
                {
                    id:22,
                    name:'测试22'
                },
                {
                    id:33,
                    name:'测试33'
                }
            ],
            show:true,
        }
    },
    methods:{
        sortTabs(){
          //  this.active = 0
             this.show = false
            this.tabs = [
               
                {
                    id:22,
                    name:'测试22'
                },
                 {
                    id:11,
                    name: '测试11'
                },
                {
                    id:33,
                    name:'测试33'
                }
            ]
            Promise.resolve().then(()=>{
                 this.show = true
               
            })
        }
    }
}
</script>

<style>

</style>