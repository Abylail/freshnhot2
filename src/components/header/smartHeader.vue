<template>
    <header v-bind:class="{'shadow':shadow,'fixed':fixed}">
        <div class="left side" >
            <button v-if="backButton" class="back-button" v-on:click="backButtonClick"><span/></button>
            <router-link v-if="logo" to="/" class="logo">
                <img src="../../assets/logo.svg" alt="logo" class="logo"/>
            </router-link>
        </div>
        <div class="right side">
            <a v-if="phone" class="phone-container" href="tel:+77056707891">
                <div class="phone-button"><img src="https://img.icons8.com/ios-filled/100/ffffff/phone.png"/></div>
                <p class="phone-number">8 (777) 777 77 77</p>
            </a>
        </div>
        
    </header>
</template>
<script>
import router from "../../router"

export default {
    name:'smartHeader',
    methods:{
        backButtonClick(){
            router.go(-1)
        }
    },
    props:{
        backButton:{
            type:Boolean,
        },
        logo:{
            type:Boolean
        },
        phone:{
            type:Boolean
        },
        shadow:{
            type:Boolean
        },
        fixed:{
            type:Boolean
        }
    }
}
</script>
<style scoped>
    header{
        height: 60px;
        background-color: #2C2C2C;

        padding-left:3%;
        padding-right:3%;
    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color:black;
        opacity: .98;
    }
    .side{
        height: 100%;

        display: flex;
        align-items: center;
    }
    .logo{
        height: 45px;
        width: 45px;
    }

    .phone-number{
        color:black;

        font-family: Montserrat;
        font-weight: bold;
        padding-top:3px;
    }
    .phone-button{

        margin-right: 5px;
        background-color: black;

        display: flex;

        padding:5px;
        border-radius: 30px;
    }
    .phone-button img{
        height: 16px;
        width: 16px;
    }
    .phone-container{
        background-color: white;

        border-radius: 40px;
        padding:12px;
        padding-left:3px;
        padding-top:3px;
        padding-bottom:3px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        text-decoration: none;
    }
    .back-button{
        height: 33px;
        width: 33px;

        border:2px solid white;
        background:none;
        border-radius: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding:0;
    }
    .back-button span{
        height: 7px;
        width: 7px;

        border-bottom:2px solid white;
        border-left:2px solid white;

        margin-left:1px;

        transform: rotate(45deg);
    }
    .shadow{
        -webkit-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.3);
    }
    .fixed{
        position: fixed;
        top:0;
        left:0;
        width:94%;
        z-index: 49;
    }
</style>