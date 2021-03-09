import Vue from 'vue'
import Vuex from 'vuex'
import { uploadImage, deleteImage } from "@/api/images";
import { getSlides } from '@/api/slider';
import { addSlide } from '../../api/slider';


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
        commit("setList", data.data);
    },
    async addSlide({ commit }, image) {
        let { data:img_src } = await uploadImage(image);
        let { data:slide } = await addSlide(img_src.data);
        commit("addSlide", slide.data);
    },
    deleteSlide({ commit }, slideForm) {
        deleteImage(slideForm.img_src).then(({data}) => {
            if(data.success) {
                commit("removeSlide", slideForm.id);
            }
        })
    }
};

const mutations = {
    setList(state, list) {
        state.list = list;
    },
    addSlide(state, slide) {
        state.list.push(slide);
    },
    removeSlide(state, id) {
        let list = [...state.list];
        let index = list.findIndex(slide => slide.id === id);
        list.splice(index, 1);
        state.list = list;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}