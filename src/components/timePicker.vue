<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-15 14:23:16
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-15 18:02:32
 * @FilePath: /eleapp/src/components/timePicker.vue
 * @Description:
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div hidden class="mask">
		    <div class="slide-box">
		        <h4>时间选择器</h4>
		        <div class="picker-group">
		            <div class="picker-column">
		                <ul class="picker-content"></ul>
		            </div>
		            <div class="picker-column">
		                <ul class="picker-content"></ul>
		            </div>
		        </div>
		        <button @click="ensure" class="btn btn-sure" type="button">确定</button>
		    </div>
		</div>
</template>

<script>
import Picker from 'common/js/pick.js'
export default {
    data(){
        return {
            hours:[],
            minutes: [],
            years:[],
            weeks:[],
            yearPicker:null,
            weekPicker:null,
            pickerColumns:null,
            pickerContents:null,
            picker:null,
           
        }
    },
    props:{
        value: {
            type: Date,
            default : () => new Date()
        }
    },
    computed:{
        yearIndex(){
            return  this.years.findIndex((i)=> i == this.value.getFullYear() ) 
        },
        weekIndex(){
            return this.whichWeek(this.value)
        }
    },
    created(){
        this.initData()
    },
    mounted(){
        this.initDom()
    },
    watch:{
        'yearPicker.result':function(val){
        
            console.log('年变了',val)
            let currentYear = Number(val.slice(0,4))
            this.crateWeekList(new Date(new Date().setFullYear(currentYear)))
            this.weekPicker = new Picker({
                pickerColumn: this.pickerColumns[1],
                pickerContent: this.pickerContents[1],
                list: this.weeks,
                activeIndex :this.weekIndex
            });
        }
    },
    
    methods:{
        initYear(){
            let nowYear  = new Date().getFullYear()
            this.createYearList(2000,nowYear)
        },
        initData(){
            this.initYear()
            this.crateWeekList(new Date(new Date().setFullYear(this.value.getFullYear())))
            console.log('wekklist',this.weeks)
        },
        initDom(){
            this.pickerColumns = document.querySelectorAll('.picker-column');
	        this.pickerContents = document.querySelectorAll('.picker-content');
            this.yearPicker = new Picker({
                pickerColumn: this.pickerColumns[0],
                pickerContent: this.pickerContents[0],
                list: this.years,
                activeIndex: this.yearIndex
            });
            this.weekPicker = new Picker({
                pickerColumn: this.pickerColumns[1],
                pickerContent: this.pickerContents[1],
                list: this.weeks,
                activeIndex :this.weekIndex
            });
        },
        createYearList(start, end) {
	        this.years = [];
		    for (let i = start; i <= end; i++) {
                let j = i < 10 ?`0${i}`: `${i}`;
		        this.years.push(j)
		    }
		},
        crateWeekList( y = new Date() ){
            this.weeks =[]
            y.setMonth(0)
            y.setDate(1)
            let year = y.getFullYear()
            let nextYear = year + 1
            let week = y.getDay() == 0 ? 7: y.getDay()
            // 拿到第一周起始日
            let firstDay;
            if(week != 1){
                firstDay = new Date( +y - (24*3600*1000*(week-1)))
            }else{
                firstDay = y
            }
            let i = 1;
            for( ; firstDay.getFullYear()< nextYear; firstDay = new Date( +firstDay + (24*3600*1000*7) ) ){
                let lastDay = new Date(+firstDay + (3600*24*1000*6))
                this.weeks.push( `第${i}周(${this.getDate(firstDay).monthDate}-${this.getDate(lastDay).monthDate})`)
                i++
            }
        },
         whichWeek( y = new Date() ){
            let paramDate = new Date(+y);
            y.setMonth(0)
            y.setDate(1)
            let year = y.getFullYear()
            let nextYear = year + 1
            let week = y.getDay() == 0 ? 7: y.getDay()
            // 拿到第一周起始日
            let firstDay;
            if(week != 1){
                firstDay = new Date( +y - (24*3600*1000*(week-1)))
            }else{
                firstDay = y
            }
            let i = 0;
            for( ; firstDay.getFullYear()< nextYear; firstDay = new Date( +firstDay + (24*3600*1000*7) ) ){
                let lastDay = new Date(+firstDay + (3600*24*1000*6))
                if( +paramDate >= +firstDay && +paramDate <= lastDay){
                    return i
                }
                i++
            }
        },
        ensure(){
            console.log(this.yearPicker.result)
            console.log(this.weekPicker.result)
            this.$emit('change')
        },
        getDate( timestemp = '' ){
            let value = timestemp ? new Date( timestemp ) : new Date();
            let year = value.getFullYear();
            let month = value.getMonth() + 1;
            let date = value.getDate();
            let hour = value.getHours();
            let minute = value.getMinutes();
            let seconds = value.getSeconds();
            if( hour < 10 ) {
                hour = '0' + hour;
            }
            if( minute < 10 ) {
                minute = '0' + minute;
            }
            if( seconds < 10 ) {
                seconds = '0' + seconds;
            }
            if( month < 10 ) {
                month = '0' + month;
            }
            if( date < 10 ) {
                date = '0' + date;
            }
            return {
                monthDate : `${ month }.${ date }`,
                dateZh : `${ month }月${ date }日`,
                longDateZh : `${ year }年${ month }月${ date }日`,
                dateParam : `${ year }-${ month }-${ date }`,
                dateTime : `${ year }-${ month }-${ date } ${hour}:${minute}`,
                dateSecond : `${ year }-${ month }-${ date } ${hour}:${minute}:${seconds}`,
            };
        }
    }
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
.btn {
    height: 32px;
    padding: 0 15px;
    text-align: center;
    font-size: 14px;
    line-height: 32px;
    color: #FFF;
    border: none;
    background: #1890ff;
    border-radius: 2px;
    cursor: pointer;
}
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(0, 0, 0, .6);
    animation: fadeIn .3s forwards;
    display: block;
}
.slide-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    border-radius: 10px 10px 0 0;
    background: #FFF;
    user-select: none;
}
.fade-in {
    animation: fadeIn .3s forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.fade-out {
    animation: fadeOut .3s forwards;
}
@keyframes fadeOut {
    from {
        opacity: 10;
    }
    to {
        opacity: 0;
    }
}
.slide-up {
    animation: slideUp .3s forwards;
}
@keyframes slideUp {
    from {
        transform: translate3d(0, 100%, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
    }
}

.slide-down {
    animation: slideDown .3s forwards;
}
@keyframes slideDown {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, 100%, 0);
    }
}
h4 {
    height: 24px;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
}
.picker-group {
    display: flex;
}
.picker-column {
    position: relative;
    flex: 1;
    height: 200px;
    margin: 0 auto;
    overflow: hidden;
    touch-action: none;
}
.picker-column::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 79px;
    border-bottom: 1px solid #ebebeb;
    background: linear-gradient(to bottom, rgba(255, 255, 255, .9), rgba(255, 255, 255, .6));
}
.picker-column::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 79px;
    border-top: 1px solid #ebebeb;
    background: linear-gradient(to bottom, rgba(255, 255, 255, .6), rgba(255, 255, 255, .9));
}
li {
    list-style: none;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
}
.btn-sure {
    display: block;
    margin: 15px auto 0;
}
</style>
