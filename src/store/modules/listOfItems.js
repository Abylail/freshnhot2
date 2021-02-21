import Vue from 'vue'
import Vuex from 'vuex'

import { getList } from '@/api/products'

Vue.use(Vuex)


const state = () => ({
    list:[
        {
            "id":0,
           "name":"Пицца королева",
           "imgSrc":"https://sushitime.kz/templates/Default/images/ff7b5b9b9414f25456473abb0df0de93429bc24f.jpg",
           "description":"небольшой комок, специально приготовленного риса, сформированный руками, на который положен небольшой кусочек рыбы.",
           "price":1200,
           "category":"Пицца",
           "categoryId":0,
           "subCategories":[
               "40см"
           ],
        },
        {
            "id":1,
            "name":"Мега Пицца",
            "imgSrc":"",
            "description":"небольшой комок, специально приготовленного риса, сформированный руками, на который положен небольшой кусочек рыбы.",
            "weight":130,
            "price":1200,
            "category":"Пицца",
            "categoryId":0,
            "subCategories":["40см"],
        },
        {
            "id":2,
            "name":"Мега Пицца2",
            "imgSrc":"https://sushitime.kz/templates/Default/images/ff7b5b9b9414f25456473abb0df0de93429bc24f.jpg",
            "description":"небольшой комок, специально приготовленного риса, сформированный руками, на который положен небольшой кусочек рыбы.",
            "calories":260,
            "weight":130,
            "price":1200,
            "category":"Пицца",
            "categoryId":0,
            "subCategories":["30см"],
        },
        {
            "id":3,
            "name":"Мега Пицца3",
            "imgSrc":"https://sushitime.kz/templates/Default/images/ff7b5b9b9414f25456473abb0df0de93429bc24f.jpg",
            "description":"небольшой комок, специально приготовленного риса, сформированный руками, на который положен небольшой кусочек рыбы.",
            "calories":260,
            "weight":130,
            "price":1200,
            "category":"Пицца",
            "categoryId":0,
            "subCategories":["20см"],
        },
        {
            "id":4,
           "name":"Суши супер",
           "imgSrc":"https://www.sushitime.kz/templates/Default/images/6834325db5b8130e08a119d65b004c77a3cdad4b.jpg",
           "description":"небольшой комок, специально приготовленного риса, сформированный руками",
           "piecesAmount":10,
           "calories":260,
           "weight":130,
           "price":1200,
           "category":"Суши",
           "categoryId":1,
           "subCategories":[],
        },
        {
            "id":5,
           "name":"Суши супер2",
           "imgSrc":"https://www.sushitime.kz/templates/Default/images/6834325db5b8130e08a119d65b004c77a3cdad4b.jpg",
           "description":"небольшой комок, специально приготовленного риса, сформированный руками",
           "piecesAmount":8,
           "calories":260,
           "weight":130,
           "price":1200,
           "category":"Суши",
           "categoryId":1,
           "subCategories":[],
        },
        {
            "id":6,
           "name":"Суши супер3",
           "imgSrc":"https://www.sushitime.kz/templates/Default/images/6834325db5b8130e08a119d65b004c77a3cdad4b.jpg",
           "description":"небольшой комок, специально приготовленного риса, сформированный руками",
           "piecesAmount":10,
           "calories":260,
           "weight":130,
           "price":1200,
           "category":"Суши",
           "categoryId":1,
           "subCategories":[],
        },
        {
            "id":7,
           "name":"Кола",
           "imgSrc":"https://sushitime.kz/templates/Default/images/ff7b5b9b9414f25456473abb0df0de93429bc24f.jpg",
           "piecesAmount":1,
           "price":1200,
           "category":"Напитки",
           "categoryId":2,
           "subCategories":[],
        }
     ],
     freeDeliveryMinimumPrice:3500,
})

const getters = {
    getList:state=>{
        return state.list
    },
    getById:state=>(itemId)=>{
        console.log("store id -",itemId);
        let item = state.list.find(i=>i.id==itemId)
        console.log(itemId,item.name);
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
    searchByName:(state,itemName)=>{
        return state.list.filter(item=>item.name==itemName)
    },
    getFreeDeliveryMinimumPrice:(state)=>{
        return state.freeDeliveryMinimumPrice
    }
}

const actions = {
    async getList(){
        let { data } = await getList()
        if(data.success){
            console.log(data.data);
            // commit("setList",data.data)
        }
    }
}

const mutations = {
    setList(state,list){
        console.log(list);
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