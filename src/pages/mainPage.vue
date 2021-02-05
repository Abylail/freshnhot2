<template>
    <div class="opening-block">
        <div class="opening-block-promo-container" v-bind:style="{height:openingBlockHeightConst+'px'}">
            <poorHeader/>
            <div class="slider-container" v-bind:style="{'height':(openingBlockHeightConst-60)+'px'}">
                <slider/>
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

        <shoppingCartButton/>
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
            openingBlockHeightConst:0,
            chosenCategory:'',
            showFixedHeader:false,
            headerHeight:80,
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
            if(window.scrollY>this.openingBlockHeightConst){
                this.showFixedHeader = true
            }
            else{
                this.showFixedHeader = false
            }
        },
    },
    created(){
        this.onScroll()
        window.addEventListener('scroll',this.onScroll)
        this.openingBlockHeightConst=window.innerHeight-this.headerHeight
    },
    destroyed(){
        window.removeEventListener('scroll',this.onScroll)
    },
    mounted(){
        
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

    .opening-block{
        width: 100%;
    }
    .opening-block-promo-container{
        margin-left:auto;
        margin-right: auto;
        max-width: 1500px;
        

        background-color: blanchedalmond;
    }
    .categories{
        /* you must get heigth before nav-categoies */
        background-color: black;
    }
    .fixed-categories{
        z-index: 99;
        position: fixed;
        top:0;
        width:100%;
        background-color:black;
    }
    .list-container{
        margin-left:auto;
        margin-right: auto;

        padding-left:15px;
        padding-right:15px;

        max-width: 1500px;
    }
    @media (max-width: 500px){
        .list-container{
            padding-left:3px;
            padding-right:3px;
        }
    }
</style>