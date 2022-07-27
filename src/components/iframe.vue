<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-22 15:24:15
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-25 18:34:45
 * @FilePath: /eleapp/src/components/iframe.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <iframe width="100%" height="100%" class="" :src="iframeSrc">
        
    </iframe>
</template>

<script>
export default {
    data(){
        return {
            iframeSrc : ''
        }
    },
    created(){
        this.iframeSrc = 'http://localhost:20000/activity?user_id=lsdlljdlfsjlf'
    }
}
</script>

<style>

</style>