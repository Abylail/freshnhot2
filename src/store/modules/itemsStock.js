import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    list:[
        {
            itemId:0,
            value:true,
        },
        {
            itemId:1,
            value:true,
        },
        {
            itemId:2,
            value:false,
        },
        {
            itemId:3,
            value:true,
        },
        {
            itemId:4,
            value:true,
        },
        {
            itemId:5,
            value:false,
        },
        {
            itemId:6,
            value:true,
        },
        {
            itemId:7,
            value:true,
        },
        {
            itemId:8,
            value:true,
        },
    ]
})

const getters = {
    getStockById:(state)=>(id)=>{
        let stockBoolean = state.list.find(item=>item.itemId==id)
        if(stockBoolean){
            return stockBoolean.value
        }
        // console.log("undefinded id call in items Stock abylai -> 8(705)670-78-91");
        return false
    },
    getList:(state)=>{
        return state.list
    }
}

const actions = {
    async setItem({commit},[id,value]){
        commit('setItem',[id,value])
    }
}

const mutations = {
    setItem(state,[id,value]){
        let stockBoolean = state.list.find(item=>item.itemId==id)
        stockBoolean.value = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}