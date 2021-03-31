import Vue from 'vue'
import Vuex from 'vuex'

import { getList, addCategory, deleteCategory } from '@/api/category'
import { addSubcategory, deleteSubcategory } from "@/api/subcategory";
import uploadImage from '@/api/upload_photo'
import userStorage from "@/api/localstorage";

Vue.use(Vuex)


const state = () => ({
    list:[],
    activeCategory:'',
})

const getters = {
    getList:state=>{
        return state.list
    },
    getAmount:state=>{
        return state.list.length
    },
    getActiveCategory:state=>{
        return state.activeCategory
    },
    getSubsById: (state) => id => {
      return state.list.find(cat => cat.id == id).subs;
    },
    getCategoryName: state => id => state.list.find(cat => cat.id+"" === id+""),
    getById:state=>id=>state.list.find(cat=>cat.id == id),
}

const actions = {
    async getList({commit}){
      let { data } = await getList();
      commit("setList", data);
    },
    async createSubcategory({ commit }, subcategory) {
        let { data } = await addSubcategory(subcategory, userStorage.get.token());
        commit("addSubcategory", data.data);
    },
    async deleteCategory({commit}, category_id) {
      await deleteCategory(category_id, userStorage.get.token());
      commit("deleteCategory", category_id);
    },
    async createCategory({commit}, object) {
        let { data } = await uploadImage(object.photo, userStorage.get.token());
        let { data:category }   = await addCategory({
            name: object.name,
            img_src: data.data
        }, userStorage.get.token());

        commit("setCategory", category.data);

    },
    async setActiveCategory({commit},category){
        commit('setActiveCategory',category)
    },
    async clearActiveCategory({commit}){
        commit('clearActiveCategory')
    },
    async deleteSubcategoryAction({ commit }, [category_id, sub_id]) {
        await deleteSubcategory(sub_id, userStorage.get.token());
        commit("deleteSubcategory", [category_id, sub_id]);
    }
}

const mutations = {
    deleteCategory(state, category_id) {
        let list = [...state.list];
        let index = list.findIndex(x => x.id === category_id);
        if (index > -1) {
            list.splice(index, 1);
        }
        state.list = list;
    },
    deleteSubcategory(state, [category_id, sub_id]) {
        let list = [...state.list];
        let categoryIndex = list.findIndex(x => x.id === category_id);
        if (categoryIndex > -1) {
            let subcatIndex = list[categoryIndex].subs.findIndex(s => s.id === sub_id);
            if(subcatIndex > -1) {
                list[categoryIndex].subs.splice(subcatIndex, 1);
                state.list = list;
            }
        }
    },
    addSubcategory(state, subcategory){
        let list = [...state.list];
        let category = list.find(cat => cat.id+"" === subcategory.category_id)
        category.subs.push(subcategory);
        state.list = list;
    },
    clearActiveCategory(state){
        state.activeCategory = ''
    },
    setActiveCategory(state,category){
        state.activeCategory = category
    },
    setList(state, list) {
        state.list = list.data;
    },
    setCategory(state, category) {
        state.list.push(category);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}