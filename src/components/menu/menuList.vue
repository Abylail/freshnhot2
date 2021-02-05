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
        max-width: 1500px;
        margin-left:auto;
        margin-right: auto;
    }
</style>