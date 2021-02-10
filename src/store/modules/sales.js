import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    list:[
        {
            id:0,
            name:"О компании",
            description:"Скидка если вас зовут Абылай"
        },
        {
            id:1,
            description:"Скидка если вас зовут Рустам"
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