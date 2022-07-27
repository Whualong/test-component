<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-18 15:24:56
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-18 16:56:20
 * @FilePath: /eleapp/src/components/targetBar.vue
 * @Description:
 *
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved.
-->
<template>
  <div class="chart-page">
    <div class="chart-con">
      <!-- d单位 -->
      <div class="chart-unit">
         单位：千卡
      </div>
      <div class="chart-replace" />
      <div class="target-con">
        <p class="target-label">
          目标值
        </p>
        <p class="target-value">
          {{ 1000 }}
        </p>
      </div>
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
                    }
                },
                yAxis : {
                    type : 'value',
                    show : false
                },
                grid : { // 让图表占满容器
                    top : '20px',
                    left : '0px',
                    right : '0px',
                    bottom : '20px'
                },
                series : [
                    {
                        data : [ 100, 200, 150, 80, 70, 110, 130 ],
                        type : 'bar',
                        barWidth : 20,
                        itemStyle : {

                            normal : {
                                color : '#FF7600',
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
                        barCategoryGap : '40%'
                    }
                ]
            };
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
        overflow: hidden;
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
            margin-left: 60px;
        }
        &::after{
            content: '';
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
    }
}
</style>