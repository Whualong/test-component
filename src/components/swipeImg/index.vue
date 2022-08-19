<template>
    <div class="swipe-img">
        <div  v-for="(item,index) in imgList" :key="index">
            <el-image 
                style="width: 100px; height: 100px"
                :src="item" 
                :preview-src-list="imgList">
            </el-image>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        imgList : {
            type : Array,
            default : () => [
                
            ]
        }
    },
    data() {
      return {
      }
    }
}
</script>

<style lang="less">

</style>