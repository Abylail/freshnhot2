<template>
<div class="big-conatiner">
    <div class="shopping-cart-conatiner">
        <smartHeader 
            :backButton="true"
            :shadow="true"
            :phone="true"
            :fixed="true"
        />
        <div class="navigation-container">
            <div class="navigation-history">
                <router-link class="red-text navigation-link" to="">Корзина</router-link>
                <div class="arrow"></div>
                <router-link class="navigation-link" to="/order">Оформление</router-link>
            </div>
        </div>
        <div v-if="getAmount>0" class="text-block">
            <p class="name-page">Корзина <span class="shopping-cart-amount">({{getAmount}})</span></p>
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
                :fixedSize="true"
            />
        </div>
        <div v-if="getAmount>0" class="price-block">
            <div class="pruduct-price">
                <p>К оплате:</p>
                <p class="price-product-price">{{getAllprice+"тг"}}</p>
            </div>
            <div class="delivery-price">
                <p>Доставка:</p>
                <p v-bind:class="{'free-delivery':getAllprice>getFreeDeliveryMinimumPrice}">{{deliveryPriceText()}}</p>
            </div>
            <div class="text-price-block">
                <p>Цена доставки может измениться в зависимости от адреса доставки</p>
            </div>
            <div class="final-price">
                <p>Итого: </p>
                <p>{{priceWithDelivery()}}</p>
            </div>
            <div class="text-price-block">
                <p>Нажимая на кнопку оформить вы должны быть готовы к очень вкусной еде</p>
            </div>
            <div class="order-button-container">
                <router-link to="/order" class="order-button">Оформить</router-link>
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

import smartHeader from '@/components/header/smartHeader'
import onePositionMenu from '@/components/menu/onePositionMenu'

export default {
    name:'shoppingCartView',
    components:{
        onePositionMenu,
        smartHeader
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
    max-width: 1000px;
    margin-left:auto;
    margin-right:auto;
}
.free-delivery{
    font-family: 'Monstrat',sans-serif;
    color:#f6d73b;
}
.shopping-cart-amount{
    color:red;
}
.shopping-cart-conatiner{
    padding-top:60px;
    color:white;
}
.text-block{
    padding:3%;
    display:flex;
    align-items: center;
    justify-content: space-between;


    margin-top:20px;
    margin-bottom:10px;
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
    font-size:22px;
    font-family: 'Montserrat';
    font-weight: bold;
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

    background-color:#f03a3a67;
    padding:10px;
    padding-top:5px;
    padding-bottom:5px;

    border-radius: 5px;

    margin-bottom:22px;
}
.final-price p{
    font-size:22px;
}

.text-price-block{
    margin-top:20px;
    margin-bottom:20px;
    padding-right:30%;
}
.text-price-block p{
    font-size:14px;
    color:gray;
}

.order-button-container{
    margin-top:10px;
    margin-bottom:20px;
}
.order-button{
    font-size:22px;
    color:white;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;

    padding:8px;
    border-radius: 5px;


    text-decoration: none;

    -webkit-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
}
.pruduct-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
/* .price-product-price{
    color:#a8f662;
} */
.pruduct-price p{
    font-size: 22px;
}
.delivery-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
.delivery-price p{
    font-size: 22px;    
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
    font-size: 22px;
}
.main-text-block{
    padding-left: 10px;
}
.main-text-block p{
    font-size:14px;
}


.navigation-container{
    padding-left:3%;
    padding-right:3%;

    margin-top:20px;
}
.navigation-history{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top:20px;
    margin-bottom:10px;
}
.navigation-link{
        color:white;
        text-decoration: none;
        font-size:14px;
    }
    .red-text{
        color:red;
    }


        /* arrow */
.arrow {
  background: #fff;
  height: 2px;
  width: 25px;

  position: relative;
  cursor: pointer;

  margin-left:10px;
  margin-right:10px;
}

 .arrow::before,
  .arrow::after {
    content: "";
    background: #fff;
    position: absolute;
    height: 3px;
    width: 8px;
  }

  .arrow::before {
    right: -3px;
    bottom: -3px;
    transform: rotate(-45deg);
  }

  .arrow::after {
    right: -3px;
    top: -2.5px;
    transform: rotate(45deg);
  }
  @media (min-width:500px){
      .shopping-cart-conatiner{
          color:black;
      }
      .navigation-link{
        color:black;
      }
      .red-text{
        color:red;
    }
    .arrow {
        background: black;
    }
    .arrow::before,
  .arrow::after {
    background: black;
  }
  .info-container{
    color:black;
  }
  .list-container{
      padding-left:30px;
      padding-right:30px;
  }
  }
  @media(min-width:1000px){
      .big-conatiner{
          display: flex;
          flex-direction: row;
          margin-bottom:100px;
      }
      .info-container{
        margin-top:155px;    
      }
  }
</style>