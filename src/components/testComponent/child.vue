<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-05 18:06:04
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-08-08 13:53:51
 * @FilePath: /eleapp/src/components/testComponent/child.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
  <div>
      child
      <ul @click="ulClick($event)">
          <li @click="liClick($event)">1</li>
           <li>2</li>
            <li>3</li>
             <li>4</li>
              <li>5</li>
      </ul>
  </div>
</template>

<script>
export default {
    beforeCreate(){
 console.log('child beforecreated')
    },
    created(){
        console.log('child created')
    },
    beforeMount(){
        console.log('child before mount')
    },
    mounted(){
        console.log('child mounted')
    },
    beforeDestroy(){
        console.log('child beforedestory')
    },
    destroyed(){
        console.log('child destroyed')
    },
    methods:{
        ulClick(e){
            console.log('ul',e)
        },
        liClick(e){
            console.log('lli',e)
        }
    }
}
</script>

<style lang="less">
ul{
    padding:20px;
    li{
        margin:10px;
        padding:10px;
        font-size: 14px;
        line-height: 22px;
    }
}
</style>