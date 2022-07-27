/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-15 15:36:42
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-15 15:41:14
 * @FilePath: /eleapp/src/utils/date.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
export function getDate( timestemp = '' ){
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