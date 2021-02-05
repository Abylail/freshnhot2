import Vue from 'vue'
import VueRouter from 'vue-router'

//import pages
import mainPage from '../pages/mainPage'
import shoppingCart from '../pages/shoppingCart'
import getOrder from '../pages/getOrder'
import adminLogin from '../pages/adminLogin'
import adminPanel from '../pages/adminPanel'

//import little
import store from '../store/index'

//admin components
import menuadmin from '../components/admin/menu/menuadmin'
import textpageadmin from '../components/admin/textpages/textpageadmin'
import editMenu from '../components/admin/edit/editMenu'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'mainPage',
            path:'/',
            component:mainPage,
        },
        {
            name:'shoppingCart',
            path:'/korzina',
            component:shoppingCart,
        },
        {
            name:'getOrder',
            path:'/order',
            component:getOrder
        },
        {
            name:'adminLogin',
            path:'/login',
            component:adminLogin,
        },
        {
            name:'adminPanel',
            path:'/admin-panel',
            component:adminPanel,
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
                }
                
            ]
        }
    ],
})

router.beforeEach((to,from,next)=>{
    window.scrollTo(0, 0)
    if(to.name == 'getOrder' && store.getters["shoppingCart/getAmount"]<=0){
        next('/korzina')
        return
    }
    else if(to.name == 'adminPanel' || to.name == 'adminMenu' || to.name == 'adminTextpages' || to.name == 'editMenu'){
        if(!store.getters["loginAdmin/getLoginned"]){
            next('/login')
            return
        }
    }
    else if(to.name == 'adminLogin' && store.getters["loginAdmin/getLoginned"]){
        next('/admin-panel')
        return
    }
    next()
    
})

export default router