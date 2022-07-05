/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-04 17:34:08
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-04 17:34:17
 * @FilePath: /eleapp/src/utils/debug.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
import { isProd } from './env';

export const warn = ( msg, fn = 'error' ) => {
    !isProd && console[ fn ]( `[Mand-Mobile]: ${msg}` );
};
