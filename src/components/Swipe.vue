<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-23 16:24:57
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-07 11:04:16
 * @FilePath: /eleapp/src/components/Swipe.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div class="swipe-main" ref="con">
        <ul class="swipe-parent" ref="par">
            <li @click="triggerActive(item,index)" :class="{'swipe-item':true,'active':item == active}" v-for="(item,index) in list" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        active:{
            type : String,
        },
        list : {
            type:Array,
            default : () =>{
                return [
                ]
            }
        },
    },
    model : {
        prop : 'active',
        event : 'change'
    },
     data (){
        return {
            activeIndex:'',
            transformX:0,
            marginR:50,
            isPointerdown:false,
            lastX:0,
            diffX:0,
            distanceX:0,
            friction:0.95,
            minX: -80,
            maxX : 160,
            scopeArr : []
        }
    },
    mounted(){
        this.initCenter()
        this.bindEventListener()
        this.collectScope()
    },
    watch:{
        active:function(){
            this.initCenter()
        }
    },
    methods:{
        bindEventListener() {
            this.$refs.con.addEventListener('pointerdown', this.handlePointerdown);
            this.$refs.con.addEventListener('pointermove', this.handlePointermove);
            this.$refs.con.addEventListener('pointerup', this.handlePointerup);
            this.$refs.con.addEventListener('pointercancel', this.handlePointercancel);
        },
        initCenter(){
            let liParent = this.$refs.par;
            this.activeIndex = this.list.findIndex((i)=> i === this.active)
            this.transformX = 0;
            let offsetCenter = this.$refs.con.getBoundingClientRect().width/2
            let liArr = Array.from(liParent.childNodes)
            let selfCenter = (liArr[this.activeIndex].getBoundingClientRect().width + this.marginR)/2
            for(let i= 0;i<this.activeIndex;i++){
                this.transformX -= liArr[i].getBoundingClientRect().width
                this.transformX -=this.marginR;
            }
            this.transformX +=offsetCenter 
            this.transformX -=selfCenter
            this.transformX += this.marginR/2
            liParent.style.setProperty('transform',`translateX(${this.transformX}px)`)
        },
        getOneScope( index ){
            let liParent = this.$refs.par;
            let offsetCenter = this.$refs.con.getBoundingClientRect().width/2
            let liArr = Array.from(liParent.childNodes)
            let selfCenter = (liArr[index].getBoundingClientRect().width + this.marginR)/2
            let midScope = 0;
            for(let i= 0; i < index; i++ ){
                midScope -= liArr[i].getBoundingClientRect().width
                midScope -=this.marginR;
            }
            midScope +=offsetCenter 
            midScope -=selfCenter
            midScope += this.marginR/2
            return {
                index,
                minScope : midScope - selfCenter,
                midScope,
                maxScope : midScope + selfCenter
            }
        },
        collectScope(){
            this.scopeArr = []
            for(let i =0;i<this.list.length;i++){
                this.scopeArr.push(this.getOneScope(i))
            }
            console.log('范围' ,this.scopeArr)
        },
        handlePointerdown(e) {
            // 如果是鼠标点击，只响应左键
            if (e.pointerType === 'mouse' && e.button !== 0) {
                return;
            }
            this.$refs.con.setPointerCapture(e.pointerId);
            this.isPointerdown = true;
            this.lastX = e.clientX;
            this.diffX = 0;
            console.log('down触发')
            this.distanceX = 0;
            this.getTransform();
            this.$refs.par.style.transform = `translateX( ${this.translateX}px)`;
            this.$refs.par.style.transition = 'none';
        },
        handlePointerup(e) {
            if (this.isPointerdown) {
                this.isPointerdown = false;
                console.log('弹起时间')
                this.getTranslateX();
                // 滑动距离与时长成正比且最短时长为300ms
                const duration = Math.max(Math.abs(this.distanceX) * 1.5, 300);
                this.$refs.par.style.transition = 'transform ' + duration + 'ms ease'
                this.$refs.par.style.transform = `translateX(${this.translateX}px)`;
            }
        },
        handlePointermove(e) {
            if (this.isPointerdown) {
                this.diffX = e.clientX - this.lastX;
                console.log('move触发')
                console.log('diffx',this.diffX)
                this.translateX += this.diffX;
                this.lastX = e.clientX;
                this.$refs.par.style.transform = `translateX(${this.translateX}px)`;
            }
        },
        handlePointercancel(e) {
            if (this.isPointerdown) {
                this.isPointerdown = false;
            }
        },
        getTransform() {
            const transform = this.$refs.par.style.transform;
            this.translateX = parseFloat(transform.match(/.*\((.*)px\)/)[1]);
        },
        getTranslateX() {
            let x = this.translateX + this.distanceX;
            let activeIndex
            for(let i =0 ;i<this.scopeArr.length;i++){
                if(x>=this.scopeArr[i].minScope && x<= this.scopeArr[i].maxScope){
                    activeIndex = i
                    break;
                }
            }
            if(this.translateX >= this.scopeArr[0].maxScope){
                activeIndex = 0
            }else
            if(this.translateX <= this.scopeArr[this.scopeArr.length-1].minScope){
                activeIndex = this.scopeArr.length-1
            }
            this.translateX = this.scopeArr[activeIndex].midScope
            this.$emit( 'change', this.list[activeIndex] )
        },
        triggerActive(item){
            this.$emit( 'change', item )
        }
    }
}
</script>

<style  scoped>
    .swipe-main{
        margin-top: 100px;
        overflow: hidden;
        cursor: grab;
        touch-action: none;
        position: relative;
    }
    .swipe-main::before{
        content: '';
        position: absolute;
        left: 0;
        top:0;
        width: 20px;
        height: 100%;
        background: white;
        z-index: 1;
    }
    .swipe-main::after{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 100%;
        background: white;
        z-index: 1;
    }
    .swipe-parent{
        display: flex;
        transition-duration: 1000ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(.23,1,.68,1);
    }
    .swipe-item{  
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #B1B2BA;
        line-height: 22px;
        white-space: nowrap;
        margin-right: 50px;
    }
    .swipe-item.active{
        color:orange;
    }
</style>

