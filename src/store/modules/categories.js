import Vue from 'vue'
import Vuex from 'vuex'

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
    getById:state=>id=>state.list.find(cat=>cat.id == id),
}

const actions = {
    async setActiveCategory({commit},category){
        commit('setActiveCategory',category)
    },
    async clearActiveCategory({commit}){
        commit('clearActiveCategory')
    }
}

const mutations = {
    clearActiveCategory(state){
        state.activeCategory = ''
    },
    setActiveCategory(state,category){
        state.activeCategory = category
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}