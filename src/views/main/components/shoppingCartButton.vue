<template>
    <router-link to="/korzina" id="shopping-cart-button" v-bind:class="{'shopping-cart-button':true,'shopping-cart-button-out':!showShoppingCartButton}">
        <p class="amount-indicator text">
            {{isEmty}}
        </p>
        <div class="image-cointainer">
            <img src="@/assets/icons/shopping-basket.svg"/>            
        </div>
      <div class="animation-item"/>
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
        z-index: 20;

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
      opacity: 0;
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
    .animation-item {
      opacity: 0;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: rgba(34, 60, 80, 0.28);
      background-image: url("../../../assets/icons/sushiicon.png");
      background-size: contain;
      position: absolute;
      z-index: 19;
      top: -150px;
      -webkit-box-shadow: 0 0 10px 5px rgba(34, 60, 80, 0.3);
      -moz-box-shadow: 0 0 10px 5px rgba(34, 60, 80, 0.3);
      box-shadow: 0 0 10px 5px rgba(34, 60, 80, 0.3);
    }
    .drop {
      animation-name: big;
      animation-duration: .14s;
      animation-delay: .2s;
    }
    .drop .animation-item {
      display: block;
      animation-name: drop;
      animation-duration: .35s;
      animation-timing-function: ease-in-out;
    }
    @keyframes drop {
      0% {
        display: block;
        opacity: .5;
      }
      20% {
        opacity: 1;
      }
      100% {
        top: 0;
        display: none;
      }
    }
    @keyframes big {
      0% {
        height: 65px;
        width: 65px;
      }
      80% {
        height: 71px;
        width: 71px;
        bottom: 57px;
        right: 27px;
      }
      100% {
        height: 65px;
        width: 65px;
        bottom: 60px;
        right: 30px;
      }
    }


</style>