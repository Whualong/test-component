/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-04 17:27:02
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-04 17:27:09
 * @FilePath: /eleapp/src/utils/store.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
/**
 * Mix properties into target object.
 */
 export function extend( to, _from ) {
    for( const key in _from ) {
        to[ key ] = _from[ key ];
    }
    return to;
}