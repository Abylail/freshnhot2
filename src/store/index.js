import Vue from 'vue'
import Vuex from 'vuex'

//connect modules
import shoppingCart from './modules/shoppingCart'
import categories from './modules/categories'
import listOfItems from './modules/listOfItems'
import loginAdmin from './modules/loginAdmin'
import itemsStock from './modules/itemsStock'
import sales from './modules/sales'
import events from './modules/events'
import delivery from './modules/delivery'
import contacts from './modules/contacts'
import about from './modules/about'
import slider from './modules/slider'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        
    },
    getters:{
        
    },
    mutations:{
        
    },
    actions:{

    },
    modules:{
        shoppingCart,
        categories,
        listOfItems,
        loginAdmin,
        itemsStock,
        sales,
        events,
        delivery,
        contacts,
        about,
        slider
    }
})

export default store