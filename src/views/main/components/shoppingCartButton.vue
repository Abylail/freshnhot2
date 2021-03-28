<template>
    <router-link to="/korzina" v-bind:class="{'shopping-cart-button':true,'shopping-cart-button-out':!showShoppingCartButton}">
        <p class="amount-indicator text">
            {{isEmty}}
        </p>
        <div class="image-cointainer">
            <img src="@/assets/icons/shopping-basket.svg"/>            
        </div>
    </router-link>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'shoppingCartButton',
    props:["showShoppingCartButton"],
    computed:{
        isEmty(){
            if(this.getPrice === 0){
                return "Пусто"
            }
            return this.getPrice + "тг"
        },
        ...mapGetters({
            getAmount:"shoppingCart/getAmount",
            getPrice: "shoppingCart/getPrice"
        })
    }
}
</script>
<style scoped>
    p{
        margin:0;
    }

    .shopping-cart-button{
        height: 65px;
        width:65px;
        background-color: red;

        border-radius: 30px;

        position: fixed;
        bottom: 60px;
        right:30px;

        transition: .3s ease;
        opacity: 1;
        
        display: inline-flex;
        align-items: center;
        justify-content: center;

        box-shadow: 0px 12px 12px -3px rgba(0, 0, 0, 0.6);
        -webkit-box-shadow: 0px 12px 12px -3px rgba(0, 0, 0, 0.6);
        -moz-box-shadow: 0px 12px 12px -3px rgba(0, 0, 0, 0.6);
    }
    .shopping-cart-button-out{
        right:-100px;
    }
    .amount-indicator{
        position: absolute;
        top:-8px;
        height: 20px;
        width: auto;
        background-color: black;
        border-radius: 2px;
        color:white;
        padding-left:3px;
        padding-right:3px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text{
        font-size: 14px;
        color:white;
    }

    .image-cointainer{
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .image-cointainer img{
        height: 70%;
        width: 70%;
    }
</style>