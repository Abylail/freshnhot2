<template>
    <div class="opening-block">
        <div class="opening-block-promo-container" v-bind:style="{height:openingBlockHeightConst+'px'}">
            <div class="header-container">
                <smartHeader
                    :fixed="true"
                    :logo="true"
                    :phone="true"
                />
            </div>
            <div class="opening-block-promo-container-main" v-bind:style="{'height':(openingBlockHeightConst-60)+'px'}">
                <div class="slider-container">
                    <slider/>
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
import navCategories from '@/components/navigation/navCategoriesComponent/navCategories';
import menuList from '@/views/main/components/menuList';
import shoppingCartButton from './components/shoppingCartButton';
import smartHeader from '@/components/header/smartHeader';

import slider from './components/slider'
import { mapActions } from 'vuex';

export default {
    name:'mainView',
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
        slider,
        smartHeader,
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
        ...mapActions({
            getList:"listOfItems/getList",
            getCategories: "categories/getList"
        })
    },
    mounted(){
        this.getList()
        this.getCategories()
    },
    created(){
        // this.onScroll() 
        window.addEventListener('scroll',this.onScroll)
        this.openingBlockHeightConst = window.innerHeight-this.headerHeight
    },
    destroyed(){
        window.removeEventListener('scroll',this.onScroll)
    }
    
}
</script>
<style scoped>
    .displayNone{
        display: none;
    }
    .slider-container{
        grid-area: slider;
        height: 100%;
        width:100vw;
    }
    .nav-categories-container{
        transition: .3s ease;
        opacity: 1;
        -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0); 
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
    }
    .header-container{
        height: 60px;
    }
    .opening-block{
        width: 100%;
    }
    .opening-block-promo-container{
        margin-left:auto;
        margin-right: auto;
        
    }
    .categories{
        /* you must get heigth before nav-categoies */
        background-color: #2C2C2C;
        position:static;
        z-index:51;
        opacity: 1;
    }
    .fixed-categories{
        z-index: 51;
        position: fixed;
        top:60px;
        width:100%;
        background-color: #2C2C2C;
        opacity: .98;
        -webkit-box-shadow: 0px 11px 11px -3px rgba(0,0,0,0.9); 
        box-shadow: 0px 11px 11px -3px rgba(0,0,0,0.9);
    }
    .list-container{
        margin-left:auto;
        margin-right: auto;

        padding-left:3px;
        padding-right:3px;

        max-width: 1500px;
    }

    .opening-block-promo-container-main{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 450px;
    }
    @media (min-width: 500px){
        .opening-block-promo-container-main{
            display: flex;
        }
        .slider-container{
            height: 80%;
            max-width: 1000px;
            padding:30px;
            margin-left:auto;
            margin-right:auto;
            width:calc(100vw - 60px);
            padding-top:110px;
        }
        .opening-block-promo-container{
            background-color: #2C2C2C;
        }
    }
</style>