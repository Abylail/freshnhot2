<template>
<div class="big-conatiner">
    <div class="shopping-cart-conatiner">
        <poorHeader/>
        <div v-if="getAmount>0" class="text-block">
            <p class="name-page">Корзина ({{getAmount}})</p>
            <a class="clear" v-on:click="clearButtonClick">Очистить корзину</a>
        </div>
        <div v-else class="empty-cart-text-block">
            <div class="text-container">
                <p class="empty-cart-name-page">Корзина пуста</p>
            </div>
            <div class="text-container">
                <p class="empty-cart-text">Выберите что нибудь</p>
            </div>
            <div class="go-menu-button-container">
                <router-link to="/" class="go-menu-button">
                    В меню
                </router-link>
            </div>
        </div>
        <div class="list-container">
            <onePositionMenu
                v-for="item in getAll"
                :key="item.id"
                v-bind:item="item" :isShoppingCart="true"
            />
        </div>
        <div v-if="getAmount>0" class="price-block">
            <div class="pruduct-price">
                <p>Самая вкусная еда:</p>
                <p>{{getAllprice+"тг"}}</p>
            </div>
            <div class="delivery-price">
                <p>Доставка:</p>
                <p>{{deliveryPriceText()}}</p>
            </div>
            <div class="final-price">
                <p>Итого: </p>
                <p>{{priceWithDelivery()}}</p>
            </div>

            <div class="order-button-container">
                <router-link to="/order" class="order-button">Оформить заказ</router-link>
            </div>

        </div>
    </div>
    <div class="info-container">
        <div class="info-text-block">
            <div class="header-text">
                <p>Бесплатная доставка действует:</p>
            </div>
            <div class="main-text-block">
                <p>- для заказов из меню Manga Sushi от 3500 тг.</p>
                <p>- для заказов из меню Rocket Japan от 3500 тг.</p>
                <p>- для сборных заказов из Manga Sushi/Rocket Japan и Manga Shop на условиях минимального заказа от Manga Sushi.</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

import poorHeader from '../components/header/poorHeader'
import onePositionMenu from '../components/menu/onePositionMenu'

export default {
    name:'shoppingCart',
    components:{
        poorHeader,
        onePositionMenu,
    },
    methods:{
        clearButtonClick(){
            this.clear()
        },
        deliveryPriceText(){
            if(this.getAllprice>this.getFreeDeliveryMinimumPrice){
                return "Бесплатно"
            }
            return "от 500₸"
        },
        priceWithDelivery(){
            if(this.getAllprice>this.getFreeDeliveryMinimumPrice){
                return this.getAllprice+"₸"
            }
            return (this.getAllprice+500)+"₸"
        },
        ...mapActions({
            clear:"shoppingCart/clear",
        }),
    },
    computed:{
        ...mapGetters({
            getAll:"shoppingCart/getAll",
            getAmount:"shoppingCart/getAmount",
            getAllprice:"shoppingCart/getAllprice",
            getFreeDeliveryMinimumPrice:"listOfItems/getFreeDeliveryMinimumPrice"
        })
    },

}
</script>
<style scoped>
.big-conatiner{
    min-height: 80vh;
}
.shopping-cart-conatiner{
    color:white;
}
.text-block{
    padding:3%;
    display:flex;
    align-items: center;
    justify-content: space-between;


    margin-top:30px;
    margin-bottom:20px;
}
.list-container{
    display: flex;
    flex-wrap: wrap;

    transition: .3s ease;
}
.empty-cart-text-block{
     padding:3%;
     margin-top:50px;

     font-size:22px;
}
.text-container{
    margin-top:7px;
    margin-bottom:7px;
}
.name-page{
    font-size:32px;
}
.empty-cart-name-page{
    font-size:32px ;
}
.clear{
    font-size: 16px;
    color:gray;
}
.go-menu-button-container{
    margin-top:50px;
}
.go-menu-button{
    padding:30px;
    padding-top: 10px;
    padding-bottom:10px;
    text-decoration: none;

    background-color: red;
    color:white;
    border-radius: 4px;
}

.price-block{
    margin-top:30px;
    padding-left:3%;
    padding-right:3%;
}
.final-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
.final-price p{
    font-size:28px;
}

.order-button-container{
    margin-top:10px;
    margin-bottom:20px;
}
.order-button{
    font-size:26px;
    color:white;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;

    padding:8px;
    border-radius: 4px;


    text-decoration: none;
}
.pruduct-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
.pruduct-price p{
    font-size: 18px;
}
.delivery-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
.delivery-price p{
    font-size: 18px;    
}

.info-container{
    color:white;
    display: flex;
    flex-direction: column;

    padding-left: 3%;
    padding-right: 3%;

    margin-bottom:20px;
    margin-top:40px;
}
.header-text{
    margin-bottom: 15px;
    font-size: 20px;
}
.main-text-block{
    padding-left: 10px;
}

</style>