/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-01-05 13:59:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-19 18:13:54
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
      .set( 'common', resolve( 'src/common' ) )
      .set( 'assets', resolve( 'src/assets' ) )
      .set( 'components', resolve( 'src/components' ) )
      .set( 'utils', resolve( 'src/utils' ) )
      .set( 'pages', resolve( 'src/pages' ) )

      // svg组件的打包逻辑
      const svgRule = config.module.rule('svg');
      // 清除已有的所有 loader,如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
      svgRule.uses.clear();
      // 添加要替换的 loader
      svgRule.use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        });
    
    },
    devServer: {
        proxy: 'http://localhost:3001'
    }
}