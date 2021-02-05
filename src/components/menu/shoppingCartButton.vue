<template>
    <router-link to="/korzina" class="shopping-cart-button">
        <p class="amount-indicator text">
            {{isEmty(getAllprice)}}
        </p>
    </router-link>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'shoppingCartButton',
    methods:{
        isEmty(num){
            if(num===0){
                return "Пусто"
            }
            return num + "тг"
        }
    },
    computed:{
        ...mapGetters({
            getAllprice:"shoppingCart/getAllprice",
            getAmount:"shoppingCart/getAmount",
        })
    }
}
</script>
<style scoped>
    p{
        margin:0;
    }

    .shopping-cart-button{
        height: 50px;
        width:50px;
        background-color: red;

        border-radius: 30px;

        position: fixed;
        bottom: 40px;
        right:30px;

        opacity: 1;
        
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
</style>