import Vue from 'vue'
import Vuex from 'vuex'

import { getList, addCategory } from '@/api/category'
import { addSubcategory, deleteSubcategory } from "@/api/subcategory";
import uploadImage from '@/api/upload_photo'
import userStorage from "@/api/localstorage";

Vue.use(Vuex)


const state = () => ({
    list:[
        {
            id:0,
            name:"Пицца",
            imgSrc:"",
            subCategories:[
                {
                    id:0,
                    name:"Все",
                    value:""
                },
                {
                    id:1,
                    name:"50см",
                    value:"50см"
                },
                {
                    id:2,
                    name:"30см",
                    value:"30см"
                },
                {
                    id:3,
                    name:"20см",
                    value:"20см"
                },
            ],
        },
        {
            id:1,
            name:"Суши",
            imgSrc:"",
            subCategories:[
                {
                    id:0,
                    name:"Все",
                    value:""
                },
                {
                    id:1,
                    name:"50см",
                    value:"50см"
                },
                {
                    id:2,
                    name:"30см",
                    value:"30см"
                },
                {
                    id:3,
                    name:"20см",
                    value:"20см"
                },
            ],
        },
        {
            id:2,
            name:"Напитки",
            imgSrc:"",
            subCategories:[
                {
                    id:0,
                    name:"Все",
                    value:""
                },
                {
                    id:1,
                    name:"50см",
                    value:"50см"
                },
                {
                    id:2,
                    name:"30см",
                    value:"30см"
                },
                {
                    id:3,
                    name:"20см",
                    value:"20см"
                },
            ],
        },
        {
            id:3,
            name:"Сеты",
            imgSrc:"https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg",
            subCategories:[
                {
                    id:0,
                    name:"Все",
                    value:""
                },
                {
                    id:1,
                    name:"Сеты алики",
                    value:"Сеты алики"
                },
                {
                    id:2,
                    name:"Сеты Абылая",
                    value:"Сеты Абылая"
                },
                {
                    id:3,
                    name:"Сеты Рустама",
                    value:"Сеты Рустама"
                },
            ],
        }
    ],
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
        console.log("created", data);
        commit("addSubcategory", data.data);
    },
    async createCategory({commit}, object) {
        let { data } = await uploadImage(object.photo, userStorage.get.token());
        let { category} = await addCategory({
            name: object.name,
            img_src: data.data
        }, userStorage.get.token());

        commit("setCategory", {...category.data});
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
        console.log("subcategory", subcategory)
        let list = [...state.list];
        let cat = list.find(cat => cat.id+"" === subcategory.category_id)
        cat.subs.push(subcategory);
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
        let arr = [...state.list];
        arr.push(category);
        state.list = arr;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}