<template>
    <div>
        <SwipeImg v-if="false" :imgList="imgList" />
        <SwipeImg1 v-if="true" :imgList="imgList" />

        <button @click="closeAnimate">关闭</button>
        <div class="ele" :style="{animation:animate}" >我是动画元素</div>
    </div> 
</template>

<script>
import SwipeImg from 'components/swipeImg/index.vue' 
import SwipeImg1 from 'components/swipeImg/my.vue' 
export default {
    components : {
        SwipeImg,
        SwipeImg1
    },
    data(){
        return {
            imgList : [
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                'https://yunshi-img.zuoshouyisheng.com/452803_1360218512.jpg',
                'https://yunshi-img.zuoshouyisheng.com/big_photo_url_066929db4f6c167fb997d14a6b6bf911.jpg',
            ],
            animate : 'none'
        }
    },
    methods:{
        closeAnimate(){
            this.animate = 'moveup 2s ease  both';
        }
    }
}
</script>

<style>
.ele{
    width: 200px;
    height: 20px;
    border-radius: 50%;
    background: skyblue;
    position: absolute;
    left:400px;
}
@keyframes moveup {
    from{
        visibility: visible;
    }
    to{
        top:100px;
        visibility: hidden;
        opacity: 0;
    }
}
@keyframes hidd {
    to{
        top:100px;
        visibility: hidden;
        opacity: 0;
    }
}
</style>