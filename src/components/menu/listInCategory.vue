<template>
    <div class="category-container" v-bind:id="elementId">
        <div class="pre-edge-container">
            <div class="category-name-conatiner">
                <h2 class="name">{{category.name}}</h2>
            </div>
            <ul v-if="category.subCategories && category.subCategories.length>0" class="subcategory-container">
                <li class="sub-category-edge-container" v-for="subcat in category.subCategories" :key="subcat.value">
                    <button 
                    v-bind:value="subcat.value" 
                    v-on:click="subCategoryButtonClick"
                    :class="[{'choosen': subcat.value === subCategory}, 'sub-category-edge']"
                    >
                    {{subcat.name}}
                    </button>
                </li>
            </ul>
        </div>
        <div class="menu-list">
            <onePositionMenu
                v-for="item in list(category.name,subCategory)"
                :key="item.id"
                v-bind:item="item"
            />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import onePositionMenu from './onePositionMenu'

export default {
    name:'listInCategory',
    data(){
        return{
            elementId:"",
            subCategory:"",
        }
    },
    props:['category'],
    mounted(){
        this.elementId = "categoryid-"+this.category.id
    },
    components:{
        onePositionMenu,
    },
    methods:{
        subCategoryButtonClick(event){
            this.subCategory = event.target.value
        },
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
    }
    .pre-edge-container{
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .name{
        padding-left:1%;
        padding-right:1%;
        color:white;
        font-size:34px;
    }

    .subcategory-container{
        margin:0;
        margin-top:20px;
        height: 35px;

        overflow-y: hidden;
        overflow-x:auto;
        width: 94%;
        white-space: nowrap;

        padding-left:3%;
        padding-right:3%;


    }

    .sub-category-edge-container{
        list-style: none;
        display: inline-block;
    }
    .sub-category-edge{
        height:100%;

        margin-left:5px;
        margin-right:5px;
        background-color: rgb(49, 49, 49);

        border-radius: 20px;
        border:none;

        font-size: 18px;
        color:rgb(143, 143, 143);

        padding:5px;
        padding-left:10px;
        padding-right:10px;

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .sub-category-edge::-webkit-scrollbar {
        display: none;
    }
    
    .choosen{
        background-color: white;
        color:black;
    }
    @media (max-width: 500px){
        .name{
            padding-left: 3%;
            padding-right: 3%;
        }
    }
</style>