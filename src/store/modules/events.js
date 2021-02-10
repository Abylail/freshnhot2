import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () =>({
    list:[
        {
            id:0,
            name:"События",
            description:"Мы открылись все дела"
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