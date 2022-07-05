/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-26 13:36:13
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-04 17:25:58
 * @FilePath: /eleapp/src/utils/lang.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
export function debounce(func,delay){
    let timer = null
    let _this = this
    return function(...args){
        if(timer)
        clearTimeout(timer)
        timer = setTimeout(()=>{
           func.apply(_this,args) 
        },delay)
    }
}
export function noop() {}
/**
 * Creates a throttled function that only invokes fn at most once per every interval milliseconds
 */
 export function throttle( fn = noop, interval = 300 ) {
    let last = 0;

    return function() {
        let context = this;
        const now = Date.now();

        if( now - last > interval ) {
            last = now;
            fn.apply( context, arguments );
        }
    };
}
