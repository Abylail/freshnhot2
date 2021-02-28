import Vue from 'vue'
import Vuex from 'vuex'

import { login, logout } from '@/api/auth'
import userStorage from '@/api/localstorage'

Vue.use(Vuex)

const state = () => ({
    loginned:false,
    error:null
})

const getters = {
    getLoginned:(state) => {
        return state.loginned;
    },
    getError: (state) => {
        return state.error;
    }
}

const actions = {   
    async tryLogin({commit},[username,password]){
        let { data } = await login(username, password);
        console.log("store login ",data)
        if( data.token ){
            commit('setLoginned', true);
            commit('setError', null);
            userStorage.setToken( data.token );
        }
        else {
            commit('setLoginned', false);
            commit('setError', data.message);
        }
    },
    async logout({commit}){
        await logout(userStorage.get.token());
        userStorage.setToken(null);
        commit("setLoginned", false);
    }
}

const mutations = {
    setLoginned(state, bool){
        state.loginned = bool;
    },
    setError(state, mes) {
        state.error = mes;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}