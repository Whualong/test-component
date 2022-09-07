<template>
    <div class="time-picker">
         <div class="picker-group">
            <div class="picker-column">
                <ul class="picker-content">
                    <li class="opt-item" v-for="(item,index) in years" :key="index">{{item}}</li>
                </ul>
            </div>
            <div class="picker-column">
                <ul class="picker-content">
                    <li class="opt-item" v-for="(item,index) in months" :key="index">{{item}}</li>
                </ul>
            </div>
            <div class="picker-column">
                <ul class="picker-content">
                     <li class="opt-item" v-for="(item,index) in date" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
        <button @click="triggerEnsure" class="btn btn-sure" type="button">确定</button>
    </div>
</template>

<script>
import Picker from 'common/js/verticalPick.js'
export default {
    data(){
        return {
            years : [],
            months : [],
            date : [],
            pickerColumns : null,
            pickerContents : null,
            yearPicker : null,
            monthPicker : null,
            datePicker : null,
            yearIndex : 0,
            monthIndex : 0,
            dateIndex : 0,
        }
    },
    created(){
        let d = new Date()
        this.createYearList(1960,d.getFullYear())
        this.yearIndex = this.years.length - 1
        this.createMonthList(1,d.getMonth()+1)
        this.monthIndex = d.getMonth()
        this.createDateList(1, d.getDate())
        this.dateIndex = d.getDate() - 1
    },
    mounted(){
        this.initDom()
    },  
    methods:{
        createYearList(start, end) {
            this.years = [];
            for (let i = start; i <= end; i++) {
                let j = i < 10 ?`0${i}`: `${i}`;
                this.years.push(j)
           }
		},
        createMonthList(start = 1 , end = 12){
            this.months = [];
            for (let i = start; i <= end; i++) {
                let j = i < 10 ?`0${i}`: `${i}`;
                this.months.push(j)
            }
        },
        createDateList(start = 1 , end = 31){
            this.date = [];
            for (let i = start; i <= end; i++) {
                let j = i < 10 ?`0${i}`: `${i}`;
                this.date.push(j)
            }   
        },
        initYear(){
             this.yearPicker = new Picker({
                pickerColumn: this.pickerColumns[0],
                pickerContent: this.pickerContents[0],
                list: this.years,
                activeIndex: this.yearIndex,
                change : this.yearChange
            });
        },
        initMonth(){
             this.monthPicker = new Picker({
                pickerColumn: this.pickerColumns[1],
                pickerContent: this.pickerContents[1],
                list: this.months,
                activeIndex :this.monthIndex,
                change : this.monthChange
            });
        },
        initDate(){
            this.datePicker = new Picker({
                pickerColumn: this.pickerColumns[2],
                pickerContent: this.pickerContents[2],
                list: this.date,
                activeIndex :this.dateIndex,
                change : this.dateChange
            });
        },
        initDom(){
            this.pickerColumns = document.querySelectorAll('.picker-column');
            this.pickerContents = document.querySelectorAll('.picker-content');
            this.initYear()
            this.initMonth()
            this.initDate()
        },
        yearChange(e){
            console.log('year change',e)
            this.yearIndex = this.years.findIndex((i)=>i === e)
            this.monthUpdate(e)
            this.dateUpdate()
            this.initDate()
        },
        monthUpdate(d){
            let now = new Date()
            if(d == now.getFullYear()){
                this.createMonthList(1,now.getMonth()+1)
                this.monthIndex = 0
            }else{
                this.createMonthList(1,12)
            }
            this.initMonth()
        },
        dateUpdate(){
            let currY = this.years[this.yearIndex]
            let currM = this.months[this.monthIndex]
            let longDates =  [1,3,5,7,8,10,12]
            let shortDates = [4,6,9,11]
            if( longDates.includes(currM) ){
                this.createDateList(1, 31)
            }else
            if( shortDates.includes(currM) ){
                this.createDateList(1, 30)
            }else{
                this.createDateList(1, new Date(currY,currM,0).getDate())
            }
            if(this.dateIndex >= this.date.length)this.dateIndex = 0
        },
        monthChange(e){
            console.log('month change',e)
            this.monthIndex = this.months.findIndex((i)=>i === e)
            this.dateUpdate()
            this.initDate()
        },
        dateChange(e){
            console.log('date change',e)
            this.dateIndex = this.date.findIndex((i) => i === e)
        },
        triggerEnsure(){
            this.$emit('getDate',`${this.years[this.yearIndex]}年${this.months[this.monthIndex]}月${this.date[this.dateIndex]}日`)
        }
    }
}
</script>

<style lang="less" scoped>
.time-picker{

}
.btn {
    padding: 8px 15px;
    text-align: center;
    font-size: 14px;
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
.btn-sure {
    display: block;
    margin: 15px auto 0;
    background-color: #658bff;
    font-size: 15px;
    width:100%;
    
}
li.opt-item {
    list-style: none;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
}
</style>
