/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-06-26 13:36:13
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-06-26 13:45:06
 * @FilePath: /eleapp/src/utils/index.js
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