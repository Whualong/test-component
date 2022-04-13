<template>
    <div>
        <h1>测试作用域</h1>
        <slot name="default" :person="person"> 默认显示 </slot>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                person : {
                    name :'pyy',
                    age : '23岁'
                }
            }
        }
    }
</script>

<style>
</style>
