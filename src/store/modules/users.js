import Vue from 'vue';
import Vuex from 'vuex';
import { getUsers, addUser } from '@/api/users';

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
    async getList({commit}) {
        let { data } = await getUsers();
        commit("setList", data.data);
    }
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
};