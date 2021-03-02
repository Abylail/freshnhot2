import Vue from 'vue'
import Vuex from 'vuex'
// import upload_photo from "@/api/upload_photo";
// import userStorage from "@/api/localstorage";
Vue.use(Vuex);

const state = () => ({
    list: [],
});

const getters = {
    getList: state => {
        return state.list;
    }
};

const actions = {

};

const mutations = {
    setList(state, list) {
        state.list = list;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}