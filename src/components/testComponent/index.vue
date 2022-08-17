<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-08-05 18:03:49
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-08-10 11:29:02
 * @FilePath: /eleapp/src/components/testComponent/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div>
        <childCom :data="group_info"/>
    </div>
</template>

<script>
import childCom from './child.vue'
export default {
    components:{
        childCom,
    },
    data(){
        return {
            group_info : {
                users: [],
                age : 12
            }
        }
    },
    created(){
        setTimeout(()=>{
            this.group_info.users = [
                {
                    name : 'pyy吃屎'
                }
            ]
        },900)
    },
    beforeCreate(){
    console.log('pareent beforecreated')
    },

    beforeMount(){
    console.log('pareent beforemount')
    },
    mounted(){
 console.log('pareent mounted')
    },
    beforeDestroy(){
 console.log('pareent beforedestory')
    },
    destroyed(){
 console.log('pareent destroyed')
    }
    
}
</script>

<style>

</style>