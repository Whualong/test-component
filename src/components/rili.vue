<template>
    <div class="zy-calendar">
        <div class='zy-calendar-title'>
            <div class='zy-title-item' v-for="(item,index) in titleList" :key="index">
                {{item}}
            </div>
        </div>
        <div class='zy-date-list'>
            <div   @click="popDate(item)" :class="{'zy-date-item':true,'zy-date__active':item.dateParam == active_date}" v-for="(item,index) in date_list" :key="index">
                {{item.date}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['date','dateList','activeDate'],
    data(){
        return {
            active_date : '',
            titleList : [ '一','二','三','四','五','六','日' ],
            defaultList : [],
            date_list : [],
        }
    },
    created(){
        this.date_list = this.date_list || this.defaultList
        this.active_date = this.activeDate || this.getDate().dateParam
        this.setDefaultDate()
    },
    methods : {
        setDefaultDate(){
            let d = new Date()
            
            let day = d.getDay()
            //let date = d.getDate();
            let startDate ;
            if ( day == 0 ){ // 周日
                startDate = new Date( d -  3600 * 24 * 1000 * 6 ) 
            }
            else {
                startDate = new Date( d - 3600 * 24 * 1000 * (day -1 ) )
            }
            this.date_list = []
            for (let i=0;i<7;i++){
                let date = new Date( +startDate + i*3600*1000*24)
                let obj = {
                    dateParam : this.getDate(+date).dateParam,
                }
                obj.date = this.getDate(+date).dateParam == this.active_date?'今':this.getDate(+date).date;
                this.date_list.push(obj)
            }
        },
        popDate(item){
            this.active_date = item.dateParam
            this.$emit('getDate',this.active_date)
        },
        getDate( timestemp = '' ) {
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
                dateZh : `${ month }月${ date }日`,
                dateParam : `${ year }-${ month }-${ date }`,
                dateTime : `${ year }-${ month }-${ date } ${hour}:${minute}`,
                dateSecond : `${ year }-${ month }-${ date } ${hour}:${minute}:${seconds}`,
                date : `${date}`
            };
        }       
    }
    

}
</script>

<style>
.zy-calendar{
    background-color:#fff;
}
.zy-calendar-title{
    display: flex;
    justify-content: center;
    align-items: center;
}
.zy-date-list{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background: #E9F0FE;
    border-radius: 15px;
}
.zy-title-item{
    flex:1;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    line-height: 20px;
}
.zy-date-item{
    flex:1;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: bolder;
    color: #333333;
    line-height: 20px;
}
.zy-date__active{
    color: #FFFFFF;
    position: relative;
    z-index: 0;
    transition: all 0.3s ease;
}
.zy-date__active::after{
    position: absolute;
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    top: 0;
    border-radius: 50%;
    z-index: -1;
    background: #4865FF;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
}

</style>