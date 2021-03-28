<template>
    <div class="order-page" v-on:keyup.enter="createOrder">
        <loader v-if="showLoader" text="Отправляем ваш заказ"/>
        <div class="header-container">
            <smartHeader 
                :backButton="true"
                :shadow="true"
                :phone="true"
                :fixed="true"
            />
        </div>
        <div class="root">
            <div class="navigation-container">
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
                    <input type="text" class="input-block-input" placeholder="имя" v-model="name"/>
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
                        <!-- <input type="radio" value='Доставка' v-model="deliveryType"/>
                        <span>Доставка</span> -->
                        <button class="choose-button" v-on:click="()=>{deliveryType='Доставка'}" v-bind:class="{'choose-button-active':deliveryType=='Доставка'}">Доставка</button>
                    </div>
                    <div class="input-radio-container">
                        <!-- <input type="radio" value='Самовывоз' v-model="deliveryType"/>
                        <span>Самовывоз</span> -->
                        <button class="choose-button" v-on:click="()=>{deliveryType='Самовывоз'}" v-bind:class="{'choose-button-active':deliveryType=='Самовывоз'}">Самовывоз</button>
                    </div>
                </div>
                <div class="input-block-input-container">
                    <!-- Доставка -->
                    <div class="input-block-input-container" v-bind:class="{'display-none':deliveryType!='Доставка'}">
                        <input type="text" class="input-block-input" placeholder="Адрес" v-model="address"/>
                    </div>
                    <div class="input-block-input-text" v-bind:class="{'display-none':deliveryType!='Самовывоз'}">
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
                        <!-- <input type="radio" value='Kaspi' v-model="paytype"/>
                        <span>Каспи перевод</span> -->
                        <button class="choose-button" v-on:click="()=>{paytype='Kaspi'}" v-bind:class="{'choose-button-active':paytype=='Kaspi'}">Оплата картой</button>

                    </div>
                    <div class="input-radio-container">
                        <!-- <input type="radio" value='Cash' v-model="paytype"/>
                        <span>Наличными <span v-bind:class="{'display-none':deliveryType!='Доставка'}">курьеру</span></span> -->
                        <button class="choose-button" v-on:click="()=>{paytype='Cash'}" v-bind:class="{'choose-button-active':paytype=='Cash'}">Наличными</button>
                    </div>
                </div>
                <div class="input-block-input-container">
                    <!-- Доставка -->
                    <div class="input-block-input-container" v-bind:class="{'display-none':paytype!='Cash'}">
                        <input type="text" class="input-block-input" placeholder="Сдача с ..." v-model="cashText"/>
                    </div>
                    <div class="input-block-input-container">
                        <textarea type="text" class="input-block-input comment" placeholder="Комментарий" v-model="comment" />
                    </div>
                </div>
            </div>
        </div>
        <div class="error-container"><p v-bind:class="{'display-none':errorMessage == '','error-message' : errorMessage != ''}">{{errorMessage}}</p></div>
        <div class="price-container">
            <p>К оплате:</p>
            <p class="price-container-price">{{getAllprice}}</p>
        </div>
        <div class="price-container-text">
            <p>Стоимость может измениться в зависимости от адреса доставки</p>
        </div>
        <div class="create-order-container">
            <a class="create-order-button" @click="createOrder">Сделать заказ</a>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import smartHeader from '@/components/header/smartHeader'
import loader from '@/components/loader/loader'

export default {
    name:'getOrderView',
    data(){
        return{
            name:"",
            mobile:"",
            deliveryType:'Доставка',
            address:"",
            comment: "",
            paytype:"Kaspi",
            cashText:"",
            errorMessage:"",
            showLoader:false,
        }
    },
    methods:{
        ...mapActions({
            createOrderStore: "shoppingCart/createOrder"
        }),
        async createOrder(){
            this.errorMessage = "";
            setTimeout(()=>{
            if(this.name.length<2){
                this.errorMessage = "Имя не может быть короче 2-х символов"
            }
            else if(this.mobile.length<16){
                this.errorMessage = "Введите полный сотовый номер"
            }
            else if(this.deliveryType == "Доставка" && this.address.length<5){
                this.errorMessage = "Введите корректый адрес"
            }
            else if(this.paytype=="Cash" && this.cashText.length<3){
                this.errorMessage = "Введите сумму для сдачи"
            }

            else if(this.errorMessage == "") {
                const phone = this.mobile.replaceAll("-", "").replaceAll("+","").replaceAll("(", "").replaceAll(")", "");
                this.createOrderStore([this.name, this.address, phone, this.comment]);
                this.showLoader = true;
                setTimeout(() => {
                this.$router.push("/");
                }, 3000);
            }

            },5)
        },
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

        },
        priceWithDelivery(){
            if(this.getAllprice>this.getFreeDeliveryMinimumPrice || this.deliveryType=='Самовывоз'){
                return this.getAllprice+"₸"
            }
            return (this.getAllprice+500)+"₸"
        },
    },
    components:{
        smartHeader,
        loader
    },
    computed:{
        ...mapGetters({
            getAllprice:"shoppingCart/getAllprice",
            getFreeDeliveryMinimumPrice:"listOfItems/getFreeDeliveryMinimumPrice"
        })
    },
}
</script>
<style scoped>
    .order-page{
        padding-top:60px;
        max-width: 600px;
        margin-right:auto;
        margin-left:auto;
    }
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
        margin-bottom: 5px;
        margin-top:15px;
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
        color:white;
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
        width:47.5%;
        margin-right:1%;
        margin-left:1%;
        font-size: 22px;


    }
    .choose-button{
        display: block;
        width:100%;
        height: 35px;

        background-color: #585858;
        color:white;
        border:none;
        border-radius: 5px;
        transition: .3s ease;
        font-size: 16px;

        -webkit-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0);
            -moz-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0);
            box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0);
    }
    .choose-button-active{
        background-color: lightgray;
        color:#585858;

        -webkit-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
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

        /* -webkit-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.25);
            -moz-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.25);
            box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.25); */
    }
    .create-order-button{
        font-size:22px;
        padding: 8px;
        border-radius: 10px;
        width: 96%;

        background-color: #ff0000d9;
        color:white;

        display: flex;
        justify-content: center;
        align-items: center;

        -webkit-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
    }
    .price-container{
        padding-left:3%;
        padding-right:3%;

        font-size: 22px;
        color:white;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .price-container-price{
        color:#ff0000e5;
        font-weight: bold;
        font-family: 'Montserrat';
    }
    .price-container-text{
        margin-top:10px;
        margin-bottom:15px;

        padding-right: 3%;
        padding-left: 3%;

        font-size: 14px;
        color:gray;
    }
    .price-container-text p{
        padding-right:30px;
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
    bottom: -2px;
    transform: rotate(-45deg);
  }

  .arrow::after {
    right: -3px;
    top: -2.5px;
    transform: rotate(45deg);
  }








    .display-none{
        height: 0;
        overflow: hidden;
        margin:0;
        padding:0;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: rgba(255, 255, 255, .4);
        opacity: 1; /* Firefox */
    }
        
    .error-container {
      height: 22px;
      padding-bottom: 5px;
    }
    .error-message{
        padding-left:3%;
        padding-right:3%;

        margin-bottom:15px;
        font-size:16px;

        animation-name: bounce;
        animation-duration: .3s;
        animation-delay: 0.05s;
        color: red;
        text-align: center;
    }


    @keyframes bounce {
  0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  27% {
    transform: translateX(25px);
    timing-function: ease-out;
  }
  40% {
    transform: translateX(-25px);
    timing-function: ease-in;
  }
  60% {
    transform: translateX(10px);
    timing-function: ease-out;
  }
  72% {
    transform: translateX(-10px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(3px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-3px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
}
@media(min-width:500px){
    .navigation-link{
        color:black;
    }
    .red-text{
        color:red;
    }
    .arrow {
  background: black;
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
    background: black;
    position: absolute;
    height: 3px;
    width: 8px;
  }
  .name-container{
      color:black;
  }
  .choose-button-active{
        background-color: #ff0000d9;
        color:white;
  }
  .price-container{
      color:black;
      padding-right:25px;
  }
}
</style>