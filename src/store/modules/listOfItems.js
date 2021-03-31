import Vue from 'vue'
import Vuex from 'vuex'

import { getList, synchronization, updateProduct, updateStock } from '@/api/products'
import upload_photo from "@/api/upload_photo";
import userStorage from "@/api/localstorage";

Vue.use(Vuex)


const state = () => ({
    list:[],
     freeDeliveryMinimumPrice:3500,
})

const getters = {
    getCategoryList: state => {
      return state.categoryList;
    },
    getList:(state) => {
        return state.list
    },
    getById:state=>(itemId)=>{
        let item = state.list.find(i=>i.id==itemId)
        if(item){
            return item;
        }
        else{
            return undefined
        }
    },
    getByCategory:(state)=>(categoryName,subCategoryName)=>{
        if(subCategoryName && subCategoryName!=""){
            return state.list.filter(item=>item.category==categoryName && item.subCategories.includes(subCategoryName))
        }
        return state.list.filter(item=>item.category==categoryName)
    },
    getByCategory2:(state)=>(category_id,subCategory)=>{
        if(subCategory && subCategory!=""){
            return state.list.filter(item=>item.category === category_id && item.subCategories.includes(subCategory))
        }
        return state.list.filter(item=>item.category_id === category_id);
    },
    getEmtyCategoryItems:state => {
        return state.list.filter(item=>item.category_id === null);
    },
    searchByName:(state,itemName)=>{
        return state.list.filter(item=>item.name==itemName)
    },
    getFreeDeliveryMinimumPrice:(state)=>{
        return state.freeDeliveryMinimumPrice
    }
}

const actions = {
    async updateStock({ commit },obj) {
        await updateStock({"list":obj.list}, userStorage.get.token());
        commit("");
    },
    async getList({ commit }){
        let { data } = await getList()
        if(data.success){
            commit("setList",data.data)
        }
    },
    async updateProduct({ commit }, obj) {
        let { data } = await updateProduct(obj, userStorage.get.token());
        commit("updateProduct",data);
    },
    // async getListHard({commit}) {
    //     let { data } = await getList()
    // },
    // eslint-disable-next-line no-unused-vars
    async synchronization({commit}){
        await synchronization(userStorage.get.token());
        /* syncData is undefinded */
        let { data } = await getList();
        commit("setList", data.data);
    },
    // eslint-disable-next-line no-unused-vars
    async uploadImage({commit}, object) {
        await upload_photo(object.file, userStorage.get.token());
    }
}

const mutations = {
    updateProduct(state, product){
        let list = [...state.list];
        let index = list.findIndex(x => x.id === product.id);
        if(index > -1) {
            list[index] = {...product};
            state.list = list;
        }
    },
    setList(state,list){
        state.list = list
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}