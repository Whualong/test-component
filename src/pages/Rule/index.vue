<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-04 17:28:09
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-04 23:39:04
 * @FilePath: /eleapp/src/pages/Rule/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div class="rule-container">
        <Ruler 
        :scope="scope" 
        :min="min" 
        :max="max" 
        v-model="value" 
        :unit="unit" 
        :step="step"  
        :stepInterval="stepInterval"
        step-text-position="bottom"
        :blank="blank"
        v-if="changeU"
        />
        <van-cell-group inset>
            <van-field v-model.number="changeUnit" label="步进值" placeholder="请输入步进值" />
        </van-cell-group>
        <van-cell-group inset>
            <van-field v-model.number="scope1" label="范围1" placeholder="请输入范围1值" />
        </van-cell-group>
        <van-cell-group inset>
            <van-field v-model.number="scope2" label="范围2" placeholder="请输入范围2值" />
        </van-cell-group>
        <van-cell-group inset>
            <van-field v-model.number="changeStep" label="间隔值" placeholder="请输入间隔值" />
        </van-cell-group>
        <button @click="change">切换</button>
        <button @click="reset">还原</button>
    </div>
</template>

<script>
import Ruler from 'components/Rule.vue'
export default {
    components:{
        Ruler,
    },
    data(){
        return {
            scope:[
                0,400
            ],
            blank:40,
            min:1,
            max:100,
            value:50,
            unit:1, // 步进值
            step:10, //多少步之间显示数值
            stepInterval:1, //步之前间隔多少跳转
            //
            changeUnit:1,
            scope1:0,
            scope2:500,
            changeStep:10,
            changeU :true
        }
    },
    created(){
        this.change()
    },
    methods:{
        change(){
            this.unit = 1
            this.scope = [ 0,400]
            this.step = 10
            this.min = 10
            this.max = 300
           
                this.value = 50
           
            this.blank = 40
             this.changeU = false
            Promise.resolve().then(()=>{
                this.changeU = true
            })
        },
        reset(){
            this.unit = 0.5
            this.blank = 120
            this.scope = [ 0,10]
            this.step = 1
            this.min = 0.5
            this.max = 10
            this.value = 2
            this.changeU = false
            Promise.resolve().then(()=>{
                this.changeU = true
            })
        }
    }
}
</script>

<style lang="less">
.rule-container{
    padding-top: 100px;
}
</style>