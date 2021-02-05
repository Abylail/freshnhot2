<template>
    <div class="itemsContainer">
        <navCategoriesItem
            v-for="category in categories"
            :key="category.id"
            v-bind:category="category"
        ></navCategoriesItem>
    </div>
</template>
<script>
import navCategoriesItem from './navCategoriesItem'

import {mapGetters} from 'vuex';
export default {
    name:'navCategories',
    components:{
        navCategoriesItem,
    },
    updated(){
        console.log("render categoties");
    },
    computed:{
        ...mapGetters({
            categories:"categories/getList"
        }),
    }
}
</script>
<style scoped>
    .itemsContainer{
        text-align: center;
        padding-left:20px;
        padding-right:20px;

        overflow-x:auto;
        overflow-y: hidden;
        white-space: nowrap;
        webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .itemsContainer::-webkit-scrollbar{
        display: none;
    }


</style>