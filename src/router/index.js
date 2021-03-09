import Vue from 'vue'
import VueRouter from 'vue-router'

//import pages
import mainView from '@/views/main/mainView'
import shoppingCartView from '@/views/shoppingCart/shoppingCartView'
import getOrderView from '@/views/getOrder/getOrderView'
import adminLoginView from '@/views/adminLogin/adminLoginView'
import adminPanelView from '@/views/adminPanel/adminPanelView'
import textPageView from '@/views/textPage/textPageView'

//import little
import store from '../store/index'

//admin components
import menuadmin from '../components/admin/menu/menuadmin'
import textpageadmin from '../components/admin/textpages/textpageadmin'
import editMenu from '../components/admin/edit/editMenu'
import loader from '../components/loader/loader'
import sliderEditView from '../views/adminPanel/views/sliderEditView'
import promoEditView from "@/views/adminPanel/views/promoEditView";

import userStorage from '@/api/localstorage'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'mainView',
            path:'/',
            component:mainView,
        },
        {
            name:'shoppingCart',
            path:'/korzina',
            component:shoppingCartView,
        },
        {
            name:'getOrder',
            path:'/order',
            component:getOrderView
        },
        {
            name:'adminLogin',
            path:'/login',
            component:adminLoginView,
        },
        {
            name:'textPage',
            path:'/text/:pageName',
            component:textPageView,
        },
        {
            name:'adminPanel',
            path:'/admin-panel',
            component:adminPanelView,
            children:[
                {
                    name:'adminMenu',
                    path:'',
                    component:menuadmin,
                },
                {
                    name:'adminTextpages',
                    path:'text/:linkname',
                    component:textpageadmin,
                },
                {
                    name:'editMenu',
                    path:'editmenu/:itemId',
                    component:editMenu,
                },
                {
                    name:'sliderEdit',
                    path: 'sliderEdit',
                    component: sliderEditView
                },
                {
                    name: 'promoEdit',
                    path: 'promoEdit',
                    component: promoEditView
                }
                
            ]
        },
        {
            name:'not-founded',
            path:'/:catch',
            component:loader,
            props:{errorText:"Страница не найдена"}
        }
    ],
})

router.beforeEach((to,from,next)=>{
    window.scrollTo(0, 0);
    if(to.name === 'getOrder' && store.getters["shoppingCart/getAmount"]<=0){
        next('/korzina')
        return
    }
    else if(to.name === 'adminPanel' || to.name === 'adminMenu' || to.name === 'adminTextpages' || to.name === 'editMenu'){
        // eslint-disable-next-line no-constant-condition
        if(userStorage.get.token() == null){
            next('/login')
            return
        }
    }
    else if(to.name === 'adminLogin' && userStorage.get.token() != null){
        next('/admin-panel')
        return
    }
    next()
    
})

// router.beforeEach((to,from,next)=>{
//     if(to.name == 'adminLogin'){
//         next()
//     }
//     else if(!store.getters["loginAdmin/getLoginned"]){
//         next('/login')
//     }
//     else{
//         next()
//     }
// })

export default router