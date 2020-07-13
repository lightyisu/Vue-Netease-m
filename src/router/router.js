import Vue from 'vue'
import VueRouter from 'vue-router'
const home= ()=>import('@/components/home.vue')
const my= ()=>import('@/views/my.vue')
const video= ()=>import('@/views/video.vue')
const community= ()=>import('@/views/community.vue')
const discovery= ()=>import('@/views/discovery.vue')
const search=()=>import('@/components/search.vue')
const result=()=>import('@/components/result.vue')

Vue.use(VueRouter)
/**let router=new VueRouter({
    routes:[{path:'/discovery',component:discovery,alias:'/'},
            {path:'/home',component:my},
            {path:'/video',component:video},
            {path:'/community',component:community}]
})**/
let router = new VueRouter({
    routes: [{
        path: '/home',

        component: home,
        children: [{
                path: 'discovery',
                component: discovery,

            }, {
                path: 'video',
                component: video
            }, {
                path: 'community',
                component: community
            },
            {
                path: 'my',
                component: my
            }
        ]
    }, {
        path: '/',
        redirect: '/home/discovery'
    },
        {
            path:'/search',
            component:search
        },
        {
            path:'/result',
            component:result}
    ]
})

export default router