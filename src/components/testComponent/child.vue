<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-05 18:06:04
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-08-10 11:41:25
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
    props : {
        data : {
            
        }  
    },
    data(){
        return {
            innerData : []
        }
    },
    watch : {
        data : {
            deep : true,
            handler(val){
                console.log('子组件监听',val)
                this.innerData = this.data.users
                console.log('拿到值',this.innerData)
            }
        }
    },
    mounted(){
         console.log('第一',this.data)
         
         console.log('第二',this.data.users)
        console.log('第三',this.$props.data.users)
    },
    beforeCreate(){
        console.log('child beforecreated')
    },
    created(){
        console.log('child created')
    },
    beforeMount(){
        console.log('child before mount')
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