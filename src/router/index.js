/*
 * @Author: wenhualong wenhualong@zuoshouyisheng.com
 * @Date: 2021-11-24 15:05:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-21 16:05:37
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
            redirect: '/pie',
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
        },
        {
            path : "/tabs",
            component : () => import('../components/tabs')
        },
        {
            path : "/timePicker",
            component : () => import( '../components/timePicker.vue')
        },
        {
            path : '/target/bar',
            component : () => import('components/targetBar.vue')
        },
        {
            path : '/bar3',
            component : () => import('components/bar3.vue')
        },
        {
            path : '/iframe',
            component : () => import( 'components/iframe.vue')
        },
        {
            path : '/sign',
            component : () => import( 'components/userToken.vue')
        },
        {
            path : '/test',
            component : () => import( 'components/poll.vue')
        },
        {
            path : '/child',
            component : () => import( 'components/testComponent/index.vue'),
            meta : {
                keepAlive : true
            }
            
        },
        {
            path : '/swipeImg',
            component : () => import( 'pages/swipeImg.vue')
        },
        {
            path : '/suggest',
            component : () => import( 'pages/Suggest/index.vue')
        },
        {
            path : '/exportImg',
            component : () => import( 'pages/export.vue')
        },
        {
            path : '/testPto',
            component : () => import( 'components/testPhoto.vue')
        },
        {
            path : '/verticalTime',
            component : () => import( 'pages/time/index.vue')
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