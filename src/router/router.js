import Vue from 'vue'
import VueRouter from 'vue-router'
import my from '@/views/my.vue'
import video from '@/views/video.vue'
import community from '@/views/community.vue'
import discovery from '@/views/discovery.vue'
Vue.use(VueRouter)
let router=new VueRouter({
    routes:[{path:'/discovery',component:discovery,alias:'/'},
            {path:'/home',component:my},
            {path:'/video',component:video},
            {path:'/community',component:community}]
})
export default router