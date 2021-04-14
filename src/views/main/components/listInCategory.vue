<template>
    <div class="category-container" v-bind:id="elementId">
        <div class="pre-edge-container">
            <div class="category-name-conatiner">
                <h2 class="name">{{category.name}}</h2>
            </div>
            <ul v-if="category.subs && category.subs.length>0" class="subcategory-container">
                <li class="sub-category-edge-container">
                    <button class="sub-category-edge" :class="{choosen: !sub_id}" @click="sub_id = null">Все</button>
                </li>
                <li class="sub-category-edge-container" v-for="subcat in category.subs" :key="subcat.id">
                    <button 
                    :value="subcat.id"
                    @click="sub_id = subcat.id"
                    class="sub-category-edge"
                    :class="[{ choosen: subcat.id === sub_id}, 'sub-category-edge']"
                    >
                    {{subcat.name}}
                    </button>
                </li>
            </ul>
        </div>
        <div class="menu-list">
            <BasePositionMenu
                v-for="item in products"
                :key="item.id"
                v-bind:item="item"
                v-show="item.in_stock"
            />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import BasePositionMenu from '../../../components/base/BasePositionMenu'

export default {
    name:'listInCategory',
    data(){
        return{
            elementId:"",
            sub_id: null,
            products: []
        }
    },
    props:['category'],
    watch:{
        sub_id: function (val) {
            if(val === null) {
                this.products = this.category.products;
            }
            else {
                this.products = this.category.products.filter(product => product.sub_category_id === val);
            }
        }
    },
    mounted(){
        this.elementId = "categoryid-"+this.category.id;
        this.products = this.category.products;
    },
    components:{
        BasePositionMenu,
    },
    computed:{
        ...mapGetters({
            list:"listOfItems/getByCategory"
        })
    },
}
</script>
<style>
    .category-container{
        margin-bottom:15px;
    }
    .menu-list{
        display:flex;
        flex-wrap: wrap;

        transition: .3s ease;
    }
    .pre-edge-container{
        margin-top: 40px;
        margin-bottom: 10px;
    }
    .name{
        padding-left:3%;
        padding-right:3%;
        color:white;
        font-size:34px;
    }

    .subcategory-container{
        margin:0;
        margin-top:25px;
        height: 45px;

        /* overflow-y: hidden; */
        overflow-x:auto;
        width: 94%;
        white-space: nowrap;

        padding-left:2%;
        padding-right:2%;

    }

    .sub-category-edge-container{
        list-style: none;
        display: inline-block;
    }
    .sub-category-edge{
        height:100%;
        cursor: pointer;

        margin-left:5px;
        margin-right:5px;
        background-color: rgb(49, 49, 49);

        border-radius: 20px;
        border:none;

        font-size: 18px;
        color:rgb(143, 143, 143);
        transition: .2s ease;

        padding:5px;
        padding-left:10px;
        padding-right:10px;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        -webkit-box-shadow: 0px 0px 0px -3px rgba(0, 0, 0, 0);
        -moz-box-shadow: 0px 0px 0px -3px rgba(0, 0, 0, 0);
        box-shadow: 0px 0px 0px -3px rgba(0, 0, 0, 0);
    }

    .sub-category-edge::-webkit-scrollbar {
        display: none;
    }
    
    .choosen{
        background-color: white;
        color:black;

        -webkit-box-shadow: 0px 10px 12px -3px rgba(0, 0, 0, 0.6);
        -moz-box-shadow: 0px 10px 12px -3px rgba(0, 0, 0, 0.6);
        box-shadow: 0px 10px 12px -3px rgba(0, 0, 0, 0.6);
    }
    @media (min-width: 500px){
        .name{
            color:black;
        }
        .sub-category-edge{
            background-color: black;
            color:white;
            opacity: .3;
        }
        .choosen{
            background-color: black;
            color:white;
            opacity:1;
        }
    }
</style>