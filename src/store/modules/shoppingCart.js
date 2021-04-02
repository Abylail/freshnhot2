import Vue from 'vue'
import Vuex from 'vuex'

//import local storage
import userStorage from '../../api/localstorage';
import { getPromo } from "@/api/promocodes";
import { createOrder } from "@/api/order";

Vue.use(Vuex)

const state = () => ({
    list:userStorage.get.list()||[],
    amount:userStorage.get.amount()||0,
    price:userStorage.get.price()||0,
    usePromocode: false,
    sale: 0
})

const getters = {
    getSale: state => {
        return state.sale;
    },
    getItemAmount:(state)=>(itemId)=>{
        let obj = state.list.find(item=>item.id===itemId);
        if(obj) {
            return obj.amount
        }
        else {
            return 0
        }
    },
    getAll:(state)=>{
        return state.list
    },
    getPrice: state => {
        return state.price;
    },
    getAllprice:state=>{
        if(state.price<3500) return state.price * (0.01*(100-state.sale))+500;
        return state.price * (0.01*(100-state.sale));
    },
    getAmount:state=>{
        return state.amount
    },
    usePromocode: state => {
        return state.usePromocode
    },
    promocodeValue: state => {
        return state.sale;
    }
}

const actions = {
    async createOrder({commit, getters}, [name, street, phone, descr, deliveryType]) {
        let order = {
            street: null,
            phone: null,
            products:[],
            counts:[],
            sale: getters["getSale"],
            descr: null
        };
        order.descr = `(Заказ с сайта) Имя: ${name}, коммент: ${descr}, адресс: ${street}, тип доставки: ${deliveryType}`;
        order.street = street;
        order.phone = phone;
        getters["getAll"].forEach(product => {
            order.products.push(product.vendor_code);
            order.counts.push(product.amount);
        });
        await createOrder(order);
        commit('clear');
    },
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
    usePromocode({commit}, promoName) {
        commit("setPromocode", [false, 0]);
        getPromo(promoName).then(({data}) => {
            data.data && commit("setPromocode", [true, data.data.value]);
        });
    }
}

const mutations = {
    setPromocode(state, [usePromocode, value]) {
        state.usePromocode = usePromocode;
        state.sale = value;
    },
    clear(state){
        state.list = [];
        state.amount = 0;
        state.price = 0;
        state.usePromocode = false;
        state.sale = 0;
        
        userStorage.setLocalStorage([],0,0);
    },
    addItem(state,itemObject){
        let obj = state.list.find(item=>item.id===itemObject.id);
        if(obj){
            obj.amount = obj.amount + 1;
        }
        else{
            state.list.push({
                ...itemObject,
                'amount':1,
            })
        }
        state.price += Number.parseInt(itemObject.price);
        state.amount = state.amount + 1

        //ADD TO LOCALSTORAGE
        userStorage.setLocalStorage(state.list,state.amount,state.price)
        
    },
    removeItem(state,id){
        let obj = state.list.find(item=>item.id===id);
        if(obj && obj.amount>0){
            if(obj.amount === 1){
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