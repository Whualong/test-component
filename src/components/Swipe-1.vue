<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-23 16:24:57
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-27 13:28:53
 * @FilePath: /eleapp/src/components/Swipe-1.vue
 * @Description:
 *
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved.
-->
<template>
  <div class="swipe-contain">
    <ul
      ref="par"
      class="swipe-parent"
      @touchmove="touchMove"
      @touchstart="touchStart"
      @touchend="touchEnd"
    >
      <li
        v-for="(item,index) in list"
        :key="index"
        :class="{'swipe-item':true,'active':item == active}"
        @click="triggerActive(item,index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    model : {
        prop : 'active',
        event : 'change'
    },
    props : {
        active : {
            type : String,
        },
        list : {
            type : Array,
        },
    },
    data() {
        return {

        };
    },
    mounted() {
        this.$refs.par.style.transform = 'translateX(0px)';
        this.initActive();
    },
    methods : {
        touchMove( e ) {
            console.log( 'touchmove', e );
        },
        touchStart( e ) {
            console.log( 'touchstart', e );
        },
        touchEnd( e ) {
            console.log( 'touchend', e );
        },
        initActive() {
            let index = this.list.findIndex( ( i ) => i == this.active );
            this.$refs.par.style.transform = `translateX(-${36 * index }px)`;
        },
        triggerActive( item, index ) {
            this.$refs.par.style.transform = `translateX(-${36 * index }px)`;
            this.$emit( 'change', item );
        }
    }
};
</script>

<style  scoped lang="less">
    .swipe-contain{
        overflow: hidden;
        cursor: grab;
        width: 100%;
    }
    .swipe-parent{
        overflow-x: visible;
        display: flex;
        transition-duration: 1000ms;
        margin-left: calc(50% - 18px);
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
        flex: 0 0 36px;
        text-align: center;
    }
    .swipe-item.active{
        color:var(--primary-color);
    }
</style>

