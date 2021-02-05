import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    loginned:false,
})

const getters = {
    getLoginned:(state)=>{
        return state.loginned
    }
}

const actions = {   
    tryLogin({commit},[login,password]){
        console.log(login,password);
        commit('tryLogin',[login,password])
    }
}

const mutations = {
    tryLogin(state,[login,password]){
        console.log(login,password)
        state.loginned = true
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}