<template>
    <div class="swipe-img">
        <div class="img-con">
            <div class="img-list" v-if="imgList.length">
                <span class="img-item" v-for="(item,index) in imgList" :key="index" @click="showDetail(index,item)">
                    <img :src="item" >
                </span>
            </div>
            <!-- 上传图片 -->
            <div class="add-img" v-if="showAdd"></div>
        </div>
       
        <!-- 图片预览 -->
        <div class="img-preview" v-if="showPreview">
            <div class="mask" @click.self="showPreview = false"></div>
            <div class="mask-cover">
                <span class="close" @click="closePreview">
                    <img :src="closeIcon">
                </span>
                <template v-if="imgList.length>1">
                    <span  class="step"><span class="active">{{this.activeIndex +1 }}/</span>{{this.imgList.length}}</span>
                    <span  :class="{'prev':true,'dis':disPrev}" @click="prevPreview">
                        <img :src="leftIcon">
                    </span>
                    <span  :class="{'next':true,'dis':disNext}" @click="nextPreview">
                        <img :src="rightIcon">
                    </span>
                </template>
            
                <div class="img-view">
                    <img :src="activeImg">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import closeIcon from './images/close.png'
import leftIcon from './images/left.png'
import rightIcon from './images/right.png'
export default {
    props : {
        imgList : {
            type : Array
        },
        max : {
            type : Number
        },
        showAdd : {
            type : Boolean,
            default : true
        },
    },
    data(){
        return {
            closeIcon,
            leftIcon,
            rightIcon,
            showPreview : false,
            activeImg : null,
            activeIndex : 0,
            disPrev : false,
            disNext : false
        }
    },
    methods : {
        showDetail(index,d){
            this.showPreview = true
            this.activeIndex = index
            this.activeImg = d
            this.disPrev = this.activeIndex == 0
            this.disNext = this.activeIndex == this.imgList.length - 1
        },
        closePreview(){
            this.showPreview = false
        },
        prevPreview(){
            if(this.activeIndex == 0){
                this.disPrev = true
                return
            }
            this.activeIndex--
            this.activeImg = this.imgList[this.activeIndex]
        },
        nextPreview(){
            if(this.activeIndex == this.imgList.length-1){
                this.disNext = true
                return
            }
            this.activeIndex++
            this.activeImg = this.imgList[this.activeIndex]
        }
    }
}
</script>

<style lang="less" scoped>
.swipe-img{
    .img-con{
        display: flex;
        flex-wrap: wrap;
        .img-list{
            display: inline-flex;
            flex-wrap: wrap;
            .img-item{
                width:100px;
                height: 100px;
                margin:10px;
                overflow: hidden;
                position: relative;
                display: inline-block;
                border-radius:4px;
                img{
                    cursor: pointer;
                    vertical-align: top;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .add-img{
            display: inline-flex;
            margin:10px;
            width: 100px;
            height: 100px;
            border:1px dashed lightblue;
            border-radius:4px;
            position: relative;
            cursor: pointer;
            &::before{
                position: absolute;
                left: 50%;
                top:50%;
                transform: translate(-50%,-50%);
                width:20px;
                height: 2px;
                background: blue;
                content:  '';
                display: block;
            }
            &::after{
                position: absolute;
                content: '';
                display: block;
                left: 50%;
                top:50%;
                transform: translate(-50%,-50%);
                width:2px;
                height: 20px;
                background: blue;
            }
        }
    }
    .img-preview{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        .mask{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: .5;
            background: #000;
        }
        .mask-cover{
            position: absolute;
            z-index: 1;
            left:230px;
            top:100px;
            bottom:100px;
            right: 230px;
            min-width: 500px;
            background: #fff;
            user-select: none;
            .step{
                font-size: 18px;
                font-family: Roboto;
                font-weight: 500;
                line-height: 22px;
                color: #333333;
                opacity: 1;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top:36px;
                .active{
                    color:#99989B;
                }
            }
            .close{
                position: absolute;
                z-index: 1;
                cursor: pointer;
                top: 40px;
                right: 28px;
                color: #fff;
                img{
                    width: 15px;
                    height: 15px;
                }
            }
            .prev{
                position: absolute;
                z-index: 1;
                cursor: pointer;
                transform: translateY(-50%);
                left: 16px;
                top: 50%;
                font-size: 24px;
                color: #fff;
                border-color: #fff;
                img{
                    width: 28px;
                    height: 28px;
                }
            }
            .next{
                transform: translateY(-50%);
                right: 16px;
                top: 50%;
                position: absolute;
                z-index: 1;
                cursor: pointer;
                img{
                    width: 28px;
                    height: 28px;
                }
            }
            .img-view{
                position: absolute;
                top:77px;
                left: 60px;
                right: 60px;
                bottom: 77px;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                        transform: scale(1) rotate(0deg);
                        margin-left: 0px;
                        margin-top: 0px;
                        max-height: 100%;
                        max-width: 100%;
                    }
            }
        }
        
    }
}
</style>