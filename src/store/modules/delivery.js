import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    list:[
        {
            id:0,
            name:"Доставка",
            description:"Довозим в черте города"
        },
        {
            id:1,
            description:"Заказы суммой 3500тг довозятся бесплатно"
        }
    ]
})

const getters = {
    getList:state=>{
        return state.list
    },
}

const actions = {

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}