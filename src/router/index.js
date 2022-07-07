/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2021-11-24 15:05:28
 * @LastEditors: wenhualong wenhualong@zuoshouyisheng.com
 * @LastEditTime: 2022-07-07 11:01:35
 * @FilePath: /eleapp/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wenhualong wenhualong@zuoshouyisheng.com, All Rights Reserved. 
 */
import VueRouter from 'vue-router';
 const router = new VueRouter({
    mode:'history',
    routes:[
        { 
            path: '/', 
            redirect: '/swipe',
            component: ()=>import('../components/HelloWorld.vue')
        },
        {
            path : '/filter',
            component: () =>import('../components/Filter.vue')

        },
        { 
            path: '/undef', 
            component: ()=>import('../components/Undef.vue'),
        },
        { 
            path: '/yzm', 
            component: ()=>import('../components/yzm.vue'),
            meta:{
                requiresAuth: true
            }
        },
        { 
            path: '/error', 
            component: ()=>import('../error/index.vue'),
        },
        {
            path: '/rili',
            component: ()=>import('../components/rili.vue')
        },
        {
            path : '/pie',
            component : ( )=>import('../components/ZyPie.vue')
        },
        {
            path : '/img',
            component : () => import('../components/uploadImg.vue')
        },
        {
            path : '/tab',
            component : ( ) =>import('../components/ZyTable.vue')
        },
        {
            path : '/photo',
            component : ( ) =>import('../components/Photo.vue')
        },
        {
            path : '/oto',
            component : ( ) =>import('../components/Camera.vue')
        },
        {
            path : '/swipe',
            component : () =>import('../components/List.vue')
        },
        {
            path : "/img/handle",
            component : () => import('../components/ImgHandle.vue')
        },
        {
            path : "/rule",
            component : () => import('pages/Rule/index')
        }
    ]
}) 

router.beforeEach((to,from,next)=>{
    if(to.path == '/yzm'&&to.meta.requiresAuth){
        if(from.path=='/'){
            next()
        }else{
            next({
                path:'/error'
            })
        }
        
    }else{
        next()
    }
})

export  default router