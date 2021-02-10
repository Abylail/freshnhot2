import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    list:[
        {
            id:0,
            name:"Контакты",
            description:"Номер менеджера 8(707)777-77-77"
        },
        {
            id:1,
            description:"Номер сотрудничества 8(707)777-77-77"
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