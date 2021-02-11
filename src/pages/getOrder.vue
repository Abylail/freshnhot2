<template>
    <div class="order-page">
        <div class="header-container">
            <poorHeader/>
        </div>
        <div class="root">
            <div class="navigation-conyainer">
                <div class="navigation-history">
                    <router-link class="navigation-link" to="/korzina">Корзина</router-link>
                    <div class="arrow"></div>
                    <router-link class="red-text navigation-link" to="">Оформление</router-link>
                </div>
            </div>
            <div class="name-container">
                <p class="name-order">Оформление заказа</p>
            </div>
            <div class="input-block">
                <div class="input-block-title-container">
                    <p class="input-block-title">1. Личные данные</p>
                </div>
                <div class="input-block-input-container">
                    <input type="text" class="input-block-input" placeholder="имя"/>
                </div>
                <div class="input-block-input-container">
                    <input type="tel" data-present="phone" class="input-block-input" placeholder="+7(___)___-__-__" @input="setMobile" v-model="mobile"/>
                </div>
            </div>

            <div class="input-block">
                <div class="input-block-title-container">
                    <p class="input-block-title">2. Способ получения</p>
                </div>
                <div class="input-block-input-container">
                    <div class="input-radio-container">
                        <input type="radio" value='Доставка' v-model="deliveryType"/>
                        <span>Доставка</span>
                    </div>
                    <div class="input-radio-container">
                        <input type="radio" value='Самовывоз' v-model="deliveryType"/>
                        <span>Самовывоз</span>
                    </div>
                </div>
                <div class="input-block-input-container">
                    <!-- Доставка -->
                    <div class="input-block-input-container" v-bind:class="{'display-none':deliveryType!='Доставка'}">
                        <input type="text" class="input-block-input" placeholder="Адрес"/>
                    </div>
                    <div class="input-block-input-container" v-bind:class="{'display-none':deliveryType!='Самовывоз'}">
                        <p>Самовывоз по адресу:<br>Абылай красавчинская 777</p>
                    </div>
                </div>
            </div>

            <div class="input-block">
                <div class="input-block-title-container">
                    <p class="input-block-title">3. Оплата</p>
                </div>
                <div class="input-block-input-container">
                    <div class="input-radio-container">
                        <input type="radio" value='Kaspi' v-model="paytype"/>
                        <span>Каспи перевод</span>
                    </div>
                    <div class="input-radio-container">
                        <input type="radio" value='Cash' v-model="paytype"/>
                        <span>Наличными <span v-bind:class="{'display-none':deliveryType!='Доставка'}">курьеру</span></span>
                    </div>
                </div>
                <div class="input-block-input-container">
                    <!-- Доставка -->
                    <div class="input-block-input-container" v-bind:class="{'display-none':paytype!='Cash'}">
                        <input type="text" class="input-block-input" placeholder="Сдача с ..."/>
                    </div>
                    <div class="input-block-input-container">
                        <textarea type="text" class="input-block-input comment" placeholder="Комментарий"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-container">
            <p>К оплате:</p>
            <p>{{getAllprice}}₸</p>
        </div>
        <div class="create-order-container">
            <a class="create-order-button">Сделать заказ</a>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import poorHeader from '../components/header/poorHeader'
export default {
    name:'getOrder',
    data(){
        return{
            mobile:"",

            deliveryType:'Доставка',

            paytype:"Kaspi",
        }
    },
    methods:{
        setMobile(){
            let len = this.mobile.length
            let lastChar = this.mobile[len-1]
            if(!Number(lastChar) && lastChar!="0"){
                this.mobile = this.mobile.slice(0,len-1)
                return
            }

            if(len<=3){
                this.mobile = "+7("+lastChar
                return
            }
            if(len>16){
                this.mobile = this.mobile.slice(0,len-1)
                return
            }


            if(lastChar == "-" || lastChar == ")"){
                console.log(lastChar);
                this.mobile = this.mobile.slice(0,len-1)
                return
            }
            
 

            
            if(len==7 && this.mobile[len-2]!=")"){
                this.mobile = this.mobile = this.mobile.slice(0,len-1)
                this.mobile = this.mobile + ")"+lastChar
            }
            else if(len==11||len==14){
                if(this.mobile[len-2]!="-"){
                    this.mobile = this.mobile = this.mobile.slice(0,len-1)
                    this.mobile = this.mobile + "-"+lastChar
                }
            }

        }
    },
    components:{
        poorHeader
    },
    computed:{
        ...mapGetters({
            getAllprice:"shoppingCart/getAllprice",
        })
    },
}
</script>
<style scoped>
    .header-conrainer{
        height: 80px;
    }
    .root{
        
        padding:3%;
        color:white;
    }
    .navigation-history{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top:10px;
        margin-bottom:30px;
    }
    .navigation-link{
        color:white;
        text-decoration: none;
        font-size:14px;
    }
    .red-text{
        color:red;
    }
    .name-order{
        font-size:22px;
        margin-bottom:20px;
        text-align: center;
        font-weight: bold;
        font-family: 'Montserrat';
    }
    .input-block{
        margin-bottom:10px;
    }
    .input-block-title{
        font-size: 16px;
        
    }
    .input-block-title-container{
        margin-bottom: 15px;
    }
    .input-block-input-container{
        margin-bottom: 15px;
        transition: .3s ease;
    }
    .input-block-input{
        display: block;
        height: 35px;
        font-size: 16px;
        padding-left:10px;
        padding-right:10px;
        width: 95%;

        border-radius: 5px;
        border:none;
        background-color: #585858;
    }
    .comment{
        height: 100px;
        max-height: 100px;
        min-height: 100px;
        max-width: 95%;
        min-width: 95%;
    }
    .input-radio-container{
        display: inline-block;
        width:45%;
        font-size: 22px;

    }
    .input-radio-container input{
        height: 20px;
        width:20px;

        border:none;
        background-color: white;

    }
    .create-order-container{
        min-height: 20px;
        margin-top: 10px;
        margin-bottom: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding-left:3%;
        padding-right:3%;
    }
    .create-order-button{
        font-size:26px;
        padding: 8px;
        border-radius: 4px;
        width: 94%;

        background-color: red;
        color:white;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .price-container{
        padding-left:3%;
        padding-right:3%;

        font-size: 28px;
        color:white;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }


    /* arrow */
.arrow {
  background: #fff;
  height: 3px;
  width: 35px;

  position: relative;
  cursor: pointer;
}

  ::before,
  ::after {
    content: "";
    background: #fff;
    position: absolute;
    height: 3px;
    width: 15px;
  }

  ::before {
    right: -3px;
    bottom: -4px;
    transform: rotate(-45deg);
  }

  ::after {
    right: -3px;
    top: -4px;
    transform: rotate(45deg);
  }








    .display-none{
        height: 0;
        overflow: hidden;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1; /* Firefox */
    }
        
</style>