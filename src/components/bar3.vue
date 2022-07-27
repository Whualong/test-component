<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-18 15:24:56
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-25 18:55:30
 * @FilePath: /eleapp/src/components/bar3.vue
 * @Description:
 *
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved.
-->
<template>
  <div class="chart-page">
    <div class="chart-con">
      <!--  -->
      <div class="chart-dot-con">
          <div class="chart-dot">
              <span class="dot tanshui"></span>
              <span class="label">碳水化物</span>
          </div>
          <div class="chart-dot">
              <span class="dot dbz"></span>
              <span class="label">蛋白质</span>
          </div>
          <div class="chart-dot">
              <span class="dot fat"></span>
              <span class="label">脂肪</span>
          </div>
      </div>
      <!-- 单位 -->
      <div class="chart-unit">
         单位：克
      </div>
      <div class="chart-replace" />
      <!-- <div class="target-con">
        <p class="target-label">
          目标值
        </p>
        <p class="target-value">
          {{ 1000 }}
        </p>
      </div> -->
    </div>
    <button @click="goActive">
        跳转活动
    </button>
    <!-- border-image -->
    <div class="line-con">
        <span class="bar"></span>
       <span class="tip">为您定制</span>
    </div>
  </div>
</template>

<script>
import { number } from 'echarts';
export default {
    data() {
        return {
            chartDom : null,
            chartCon : null,
            option : null,
        };
    },
    prop : {
        target : {
            type : number,
            default : 100
        }
    },
    mounted() {
        this.chartDom = document.querySelector( '.chart-replace' );
        this.chartCon = this.$echarts.init( this.chartDom );
        this.initData();
        this.chartCon.setOption( this.option );

    },
    methods : {
        initData() {
            this.option = {
                legend: {
                    show:false,
                    data: ['碳水化物', '蛋白质','脂肪']
                },
                xAxis : {
                    type : 'category',
                    data : [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ],
                    axisLine : {
                        show : false
                    },
                    axisLabel : {
                        show : true,
                        color : '#999999',
                        fontFamily : 'PingFangSC-Regular',
                        fontSize : 12,
                    },
                    axisTick : {
                        show : false
                    },
                    boundaryGap : '50%'
                },
                yAxis : {
                    type : 'value',
                    show : true
                },
                grid : {
                 //  top : '20px',
                 //  left : '20px',
                 //  right : '0px',
                    bottom : '20px',
                    containLabel: false
                },
                series : [
                    {
                        name : '碳水化物',
                        data : [ 100, 200, 150, 80, 70, 110, 130 ],
                        type : 'bar',
                        barWidth : 10,
                        itemStyle : {
                            borderRadius : [ 10, 10, 0, 0 ], // 圆角半径
                            normal : {
                                color : '#FF597C',
                                barBorderRadius : [ 30, 30, 0, 0 ],
                                label:{
                                    show:true,
                                    position: 'top',//显示位置 
                            　　　　　textStyle: { //文字样式
                            　　　　　  　color: '#555555',
                                        fontSize:12,
                                        fontFamily:'PingFangSC-Regular',

                                        fontWeight:500,
                            　　　　    },
                                    formatter:function(params){
                                        console.log('param',params)
                                        if(params.value){
                                            return params.value
                                        }else{
                                            return ''
                                        }
                                    }
                                }
                            }
                        },
                        barCategoryGap : '40%',
                        barGap:'50%'
                    },
                     {
                        name : '蛋白质',
                        data : [ 100, 200, 150, 80, 70, 110, 130 ],
                        type : 'bar',
                        barWidth : 10,
                        itemStyle : {
                            normal : {
                                color : '#506EFF',
                                barBorderRadius : [ 30, 30, 0, 0 ],
                                label:{
                                    show:true,
                                    position: 'top',//显示位置 
                            　　　　　textStyle: { //文字样式
                            　　　　　  　color: '#555555',
                                        fontSize:12,
                                        fontFamily:'PingFangSC-Regular',

                                        fontWeight:500,
                            　　　　    },
                                    formatter:function(params){
                                        console.log('param',params)
                                        if(params.value){
                                            return params.value
                                        }else{
                                            return ''
                                        }
                                    }
                                }
                            }
                        },
                        barCategoryGap : '40%',
                         barGap:'50%'
                    },
                     {
                        name : '脂肪',
                        data : [ 100, 200, 150, 80, 70, 110, 130 ],
                        type : 'bar',
                        barWidth : 10,
                        itemStyle : {
                            normal : {
                                color : '#F7B500',
                                barBorderRadius : [ 30, 30, 0, 0 ],
                                label:{
                                    show:true,
                                    position: 'top',//显示位置 
                            　　　　　textStyle: { //文字样式
                            　　　　　  　color: '#555555',
                                        fontSize:12,
                                        fontFamily:'PingFangSC-Regular',

                                        fontWeight:500,
                            　　　　    },
                                    formatter:function(params){
                                        console.log('param',params)
                                        if(params.value){
                                            return params.value
                                        }else{
                                            return ''
                                        }
                                    }
                                }
                            }
                        },
                        barCategoryGap : '100%',
                        barGap:'150%'
                    }
                ],
                 dataZoom: [
                   {
                        type: 'slider',
                        realtime: true,
                        start: 0,
                        end: 40,  // 初始展示40%
                        height: 4,
                        fillerColor: "rgba(17, 100, 210, 0.42)", // 滚动条颜色
                        borderColor: "rgba(17, 100, 210, 0.12)", 
                        handleSize:0, // 两边手柄尺寸
                        showDetail: false, // 拖拽时是否展示滚动条两侧的文字
                        top:'96%',
                        
                        // zoomLock:true, // 是否只平移不缩放
                        // moveOnMouseMove:true, //鼠标移动能触发数据窗口平移
                        // zoomOnMouseWheel :true, //鼠标移动能触发数据窗口缩放
                    },
                    { 
                        type: "inside",  // 支持内部鼠标滚动平移
                        start: 0,
                        end: 40,
                        zoomOnMouseWheel: false,  // 关闭滚轮缩放
                        moveOnMouseWheel: true, // 开启滚轮平移
                        moveOnMouseMove: true  // 鼠标移动能触发数据窗口平移 
                    }
                ],
            };
        },
        goActive(){
            this.$router.push({
                path : '/iframe'
            })
        }
    }
};
</script>

<style lang="less">
.chart-page{
    height: 100%;
    overflow:hidden;
    .chart-con{
        background: #FBFBFB;
        border-radius: 4px;
        position: relative;
        padding:0  0 14px;
        .chart-unit{
            position: absolute;
            right:10px;
            top:16px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #777777;
            line-height: 17px;
            
        }
        .chart-replace{
            margin-top:41px;
            height: 203px;
           // width: 1200px;
        }
        &::after{
            display: inline-block;
            position: absolute;
            top:50%;
            left:50px;
            transform: translateY( calc(-50% - 10px));
            height: 0px;
            width: 100%;
            border: 1px dashed rgba(0,0,0,0.1500);
        }
        .target-con{
            position: absolute;
            top:50%;
            left:8px;
            transform: translateY( calc(-50% - 10px));
            .target-label{
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #9C9C9C;
                line-height: 17px;
            }
            .target-value{
                font-size: 12px;
                font-family: ArialMT;
                color: #9C9C9C;
                line-height: 14px;
            }
        }
        .chart-dot-con{
            display: inline-flex;
            align-items: center;
            position: absolute;
            left:81px;
            top:16px;
            .chart-dot{
                display: flex;
                align-items: center;
                margin-right: 12px;
                .dot{
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                  
                }
                .tanshui{
                    background: #FF597C;
                }
                .dbz{
                    background: #506EFF;
                }
                .fat{
                    background: #F7B500;
                }
                .label{
                    margin-left: 8px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #777777;
                    line-height: 17px;
                }
            }
        }
    }
    .line-con{
         position: relative;
         height: 20px;
        .bar{
            width: 70px;
            height: 4px;
            opacity: 0.7;
            display: inline-block;
            position: absolute;
            bottom: 0px;
            left:0;
            background-image: linear-gradient(257deg, rgba(255, 118, 0, 1), rgba(255, 168, 93, 1));
        }
        .tip{
            font-size: 17px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #382A20;
            line-height: 24px;
            position: absolute;
            left:0;;
        }
    }
}
</style>