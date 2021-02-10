import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    list:[
        {
            id:0,
            name:"О компании",
            description:"Наша компания мы тут все красачики"
        },
        {
            id:1,
            description:"Мы вообщн очень красавчики"
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