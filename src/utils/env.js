/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-04 17:25:29
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-04 17:25:37
 * @FilePath: /eleapp/src/utils/env.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
import Vue from 'vue';

// Development environment
export const isProd = process.env.NODE_ENV === 'production';

// Browser environment sniffing
export const inBrowser = !Vue.prototype.$isServer || typeof window !== 'undefined';
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();
export const isAndroid = UA && UA.indexOf( 'android' ) > 0;
export const isIOS = UA && /iphone|ipad|ipod|ios/.test( UA );
export const root = typeof window !== 'undefined' ? window : global;
