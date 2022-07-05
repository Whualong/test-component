/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-01-05 13:59:26
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-04 17:31:59
 * @FilePath: /eleapp/vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
const path = require('path')
function resolve ( dir ) {
  return path.join( __dirname, dir );
}
module.exports={
    lintOnSave: false,
    chainWebpack(config){
      config.resolve.alias
      .set( 'components', resolve( 'src/components' ) )
      .set( 'utils', resolve( 'src/utils' ) )
      .set( 'pages', resolve( 'src/pages' ) )
    },
    devServer: {
        proxy: 'http://localhost:3001'
    }
}