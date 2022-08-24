<template>
    <div class="suggest-page">
        <!-- 头部 -->
        <p class="suggest-title">{{title}}</p>
        <!-- 功能区 -->
        <div class="suggest-con">
            <div class="suggest-con-left">
                <div>
                    <svg-icon name="feedback"></svg-icon>
                </div>
            </div>
            <div class="suggest-con-right"></div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '../../components/SvgIcon.vue'
export default {
  components: { SvgIcon },
    data(){
        return {
            title : '意见反馈&FAQ'
        }
    }
}
</script>

<style lang="less" scoped>
.suggest-page{
    height: 100%;
    padding:24px;
    box-sizing: border-box;
    overflow: hidden;
    background: rgba(241,242,246,0.39);
    .suggest-title{
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 600;
        line-height: 22px;
        color: #333333;
        display: flex;
        align-items: center;
        margin:0;
        margin-bottom: 24px;
        &::before{
            content:'';
            display:inline-block;
            width: 3px;
            height: 13px;
            background: rgba(0,102,204,0.39);
            margin-right:10px;
        }
    }
    .suggest-con{
        display: flex;
        height: calc(100% - 46px);
        &-left{
            width: 281px;
            flex : 0 0 281px;
            background: #fff;
        }
        &-right{
            margin-left: 24px;
            flex:1;
            min-width: 400px;
            background: #fff;
        }
    }
}
</style>