<template>
    <div class="opening-block">
        <div class="opening-block-promo-container" v-bind:style="{height:openingBlockHeightConst+'px'}">
            <div class="header-container">
                <poorHeader class="main-page-header" />
            </div>
            <div class="opening-block-promo-container-main" v-bind:style="{'height':(openingBlockHeightConst-60)+'px'}">
                <div class="slider-container">
                    <slider/>
                </div>
                <div class="main-text-container">

                </div>
            </div>
        </div>

        <div id="categories" v-bind:style="{'height':headerHeight+'px'}" class="categories">
            <div class="nav-categories-container" v-bind:style="{'height':headerHeight+'px'}" :class="{'fixed-categories':showFixedHeader}">
                <navCategories></navCategories>
            </div>
        </div>

        <div class="list-container">
            <menuList/>
        </div>

        <shoppingCartButton v-bind:showShoppingCartButton="this.showShoppingCartButton"/>
    </div>
</template>
<script> 
import navCategories from '../components/navigation/navCategoriesComponent/navCategories';
import menuList from '../components/menu/menuList'
import shoppingCartButton from '../components/menu/shoppingCartButton'
import poorHeader from '../components/header/poorHeader'

import slider from '../components/slider/slider'

export default {
    name:'mainPage',
    data(){
        return {
            openingBlockHeightConst:100,
            chosenCategory:'',
            showFixedHeader:false,
            headerHeight:80,
            showShoppingCartButton:false,
        }
    },
    components:{
        navCategories,
        menuList,
        shoppingCartButton,
        poorHeader,
        slider,
    },
    methods:{
        onScroll(){
            if(window.scrollY>this.openingBlockHeightConst-60){ 
                if(!this.showFixedHeader){
                this.showFixedHeader = true
                this.showShoppingCartButton = true
                }
            }
            else{
                if(this.showFixedHeader){
                this.showFixedHeader = false
                this.showShoppingCartButton = false
                }
            }
        },
    },
    created(){
        // this.onScroll() 
        window.addEventListener('scroll',this.onScroll)
        this.openingBlockHeightConst = window.innerHeight-this.headerHeight
    },
    destroyed(){
        window.removeEventListener('scroll',this.onScroll)
    },
    updated(){
        console.log("render mainpage");
    },
    
}
</script>
<style scoped>
    .displayNone{
        display: none;
    }
    .slider-container{
        grid-area: slider;
        height: 100%;
        background-color: blanchedalmond;
        width:100vw;
    }
    .main-text-container{
        grid-area: text-block;
        height: 220px;
        margin-top:15px;
        background: url('../assets/logo.svg') center center;
        background-size:contain;
        -webkit-background-size:contain;
        background-repeat: no-repeat;
        opacity:.2;
    }
    .nav-categories-container{
transition: .3s ease;

        -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0); 
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    }
    .header-container{
        height: 60px;
    }
    .main-page-header{
        position:fixed;
        width:94%;
        z-index: 50;
    }
    .opening-block{
        width: 100%;
    }
    .opening-block-promo-container{
        margin-left:auto;
        margin-right: auto;
        max-width: 1500px;
        
    }
    .categories{
        /* you must get heigth before nav-categoies */
        background-color: #2C2C2C;
        position:static;
        z-index:51;
        opacity: .98;
    }
    .fixed-categories{
        z-index: 51;
        position: fixed;
        top:60px;
        width:100%;
        background-color: #2C2C2C;

        -webkit-box-shadow: 0px 11px 11px -3px rgba(0,0,0,0.9); 
        box-shadow: 0px 11px 11px -3px rgba(0,0,0,0.9);
    }
    .list-container{
        margin-left:auto;
        margin-right: auto;

        padding-left:15px;
        padding-right:15px;

        max-width: 1500px;
    }

    .opening-block-promo-container-main{
        display: grid;
        grid-template-areas:"slider" "text-block";
        grid-auto-rows: 1fr 250px;
        min-height: 450px;
    }
    @media (max-width: 500px){
        .list-container{
            padding-left:3px;
            padding-right:3px;
        }
    }
</style>