<template>
    <div class="list-container-menu">
        <listInCategory 
            v-for="category in categories"
            :key="category.id"
            v-bind:category="category"
        />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

import listInCategory from './listInCategory'
export default {
    name:'menuList',
    components:{
        listInCategory,
    },
    computed:{
        ...mapGetters({
            categories:'categories/getList'
        }),
    },
}
</script>
<style>
    .list-container-menu{
        max-width: 1000px;
        margin-left:auto;
        margin-right: auto;
        min-width:320px;
    }
    @media(max-width:1000px){
        .list-container-menu{
            padding-left:30px;
            padding-right:30px;
        }
    }
    @media (max-width:500px){
        .list-container-menu{
            padding:0;
        }
    }
</style>