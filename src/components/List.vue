<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-23 16:59:15
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-29 23:11:39
 * @FilePath: /eleapp/src/components/List.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div>
        <swipe  v-model="active" :list="list"/>
    </div>
</template>

<script>
import Swipe from './Swipe.vue'
export default {
    components:{
        Swipe,
    },
    data(){
        return{
            active:'蓝色的',
            list: [
                    '米饭',
                    '肉',
                    '大白菜',
                    '拉拉萨好',
                    '了苏打绿蜂聚',
                    '蓝色的',
                    '撒老地方啦哈',
                    '拉萨快递费',
                    '李施德林熟练度',
                    '拉死啦地方',
                    '沙路口的法律了',
                    '历史大发了了'
                ]
        }
    }
}
</script>

<style>

</style>