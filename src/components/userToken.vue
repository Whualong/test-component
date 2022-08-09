<!--
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2022-07-26 13:25:49
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-27 15:02:01
 * @FilePath: /eleapp/src/components/userToken.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
-->
<template>
    <div>
        <h1>获取新用户链接</h1>
        <button @click="envChange">{{envText}}</button>
        <button @click="getUserToken">获取用户</button>
        <p>
            {{link}}
        </p>
    </div>
</template>

<script>
const md5 = require('js-md5');
export default {
    data(){
        return {
            link: '',
            zimu : [
                'a','b','c','d','e','f','g','h','i','j','k'
            ],
            user_id :'',
            timeStap: '',
            sign : '',
            env:'w6q5YmcZ',
            envText:'测试环境'
        }
    },
    methods:{
        getUserToken(){
            this.user_id = ''
            this.timeStap = Date.parse(new Date())/1000
            for(let i =0 ;i<20;i++){
                this.user_id += this.zimu[Math.round(Math.random()*10)]
            }
            this.sign = md5.hex(`${this.timeStap}|${this.user_id}|${this.env}`)
            this.link = `https://localhost:20000/middle/page?user_id=${this.user_id}&timestamp=${this.timeStap}&sign=${this.sign}`
        },
        envChange(){
            this.envText = this.envText == '测试环境' ? '生产环境' : '测试环境'
            this.env = this.envText == '测试环境' ? 'w6q5YmcZ' : 'smuDjv8m'
           // this.getUserToken()
        },
        getEnv(){
            let zimu =[
                'a','b','c','d','e','f','g','h','i','j','k'
            ]
            let user_id = ''
            let env = 'smuDjv8m'
            let timeStap = Date.parse(new Date())/1000
            for(let i =0 ;i<20;i++){
                user_id += zimu[Math.round(Math.random()*10)]
            }
            let sign = md5.hex(`${timeStap}|${user_id}|${env}`)
            this.link = `https://saas-sinosig.zuoshouyisheng.com/middle/page?user_id=${user_id}&timestamp=${timeStap}&sign=${sign}`
        }
    }
}
</script>

<style>

</style>