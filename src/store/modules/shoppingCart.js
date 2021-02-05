import Vue from 'vue'
import Vuex from 'vuex'

//import local storage
import userStorage from '../../api/localstorage'

Vue.use(Vuex)

const state = () => ({
    list:userStorage.get.list(),
    amount:userStorage.get.amount(),
    price:userStorage.get.price(),
})

const getters = {
    getItemAmount:(state)=>(itemId)=>{
        let obj = state.list.find(item=>item.id===itemId);
        if(obj){
            return obj.amount
        }
        else{
            return 0
        }
    },
    getAll:(state)=>{
        return state.list
    },
    getAllprice:state=>{
        return state.price
    },
    getAmount:state=>{
        return state.amount
    }
}

const actions = {
    async clear({commit}){
        commit('clear')
    },
    async addItem({commit},itemObject){
        commit('addItem',itemObject)
    },
    async removeItem({commit},id){
        commit('removeItem',id)
    },
    async removeAllItem({commit},id){
        commit("removeAllItem",id)
    },
}

const mutations = {
    clear(state){
        state.list = []
        state.amount = 0
        state.price = 0
        
        userStorage.setLocalStorage(state.list,state.amount,state.price)
    },
    addItem(state,itemObject){
        let obj = state.list.find(item=>item.id===itemObject.id)
        console.log(state.list);
        if(obj){
            obj.amount = obj.amount + 1
            state.price = state.price + obj.price
        }
        else{
            state.list.push({
                ...itemObject,
                'amount':1,
            })
            state.price = state.price + itemObject.price
        }
        state.amount = state.amount + 1

        //ADD TO LOCALSTORAGE
        userStorage.setLocalStorage(state.list,state.amount,state.price)
        
    },
    removeItem(state,id){
        let obj = state.list.find(item=>item.id===id)
        console.log(obj);
        if(obj && obj.amount>0){
            
            if(obj.amount==1){
                let index = state.list.findIndex(itemId=>itemId.id == id)
                state.list.splice(index,1)
            }
            else{
                obj.amount = obj.amount - 1
            }
            state.amount = state.amount - 1
            state.price = state.price - obj.price
            
        }
        userStorage.setLocalStorage(state.list,state.amount,state.price)
    },
    removeAllItem(state,id){
        //delete object
        let obj = state.list.find(item=>item.id===id)
        if(obj && obj.amount>0){
            state.amount = state.amount - obj.amount
            state.price = state.price - (obj.amount*obj.price)
            let index = state.list.findIndex(itemId=>itemId.id == id)
            state.list.splice(index,1)
        }
        userStorage.setLocalStorage(state.list,state.amount,state.price)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}