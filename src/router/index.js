import VueRouter from 'vue-router';

 const router = new VueRouter({
    mode:'history',
    routes:[
        { 
            path: '/', 
            redirect: '/img',
            component: ()=>import('../components/HelloWorld.vue')
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