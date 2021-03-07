import Vue from 'vue'
import Vuex from 'vuex'
// import upload_photo from "@/api/upload_photo";
import { getSlides } from '@/api/slider';


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
    async getList({ commit }) {
        let { data } = await getSlides();
        console.log(data);
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
}