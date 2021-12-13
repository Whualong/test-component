"use strict";

var path = require('path');

var _require = require('vue-loader'),
    VueLoaderPlugin = _require.VueLoaderPlugin;

var HtmlPlugin = require('html-webpack-plugin');

module.exports = function () {
  return {
    mode: 'development',
    entry: {
      main: './src/main.js'
    },
    output: {
      path: path.resolve(__dirname, '../dist/static'),
      publicPath: '/static/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue'],
      symlinks: false
    },
    module: {
      rules: [{
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          esModule: false,
          fallback: 'file-loader'
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }]
    },
    plugins: [new VueLoaderPlugin(), new HtmlPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1.0, shrink-to-fit=no, viewport-fit=cover',
        charset: 'utf-8'
      },
      templateContent: "\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            <title></title>\n                            <style>html { scroll-behavior : smooth }</style>\n                        </head>\n                        <body>\n                            <div id=\"app\"></div>\n                        </body>\n                    </html>\n                "
    })],
    devServer: {
      port: 20000,
      historyApiFallback: {
        index: '/static/'
      },
      hot: true // 不好使- -!
      // proxy : {
      //     '/api' : {
      //         target : 'http://127.0.0.1:20001',
      //         secure : false,
      //         pathRewrite : { '^/api' : '' },
      //     },
      // },
      // watchOptions : {
      //     aggregateTimeout : 100,
      //     poll : false
      // }

    }
  };
};