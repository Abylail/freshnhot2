<template>
    <div class="category-edge">
        <div class="category-name-container">
            <p>{{category.name}}</p>
        </div>
        <div class="subcategories-container">
            <p>Подкатегории</p>
            <div class="subcategories-container-values">
                <p v-for="subcat in category.subCategories" :key="subcat.name"><span class="subcat-name">{{subcat.name}}</span>: значение- <span class="subcat-value">{{subcat.value}}</span> </p>
                <router-link to="" class="subcat-edit-link">Редактировать</router-link>
            </div>
        </div>
        <div class="items-list-container">
            <itemEdge
                v-for="item in list(category.name)"
                :key="item.id"
                v-bind:item="item"
            />
        </div>
    </div>
</template>
<script>
import itemEdge from './menuadminedge'

import { mapGetters } from 'vuex'
export default {
    name:'categoryEdge',
    props:['category'],
    components:{
        itemEdge
    },
    computed:{
        ...mapGetters({
            list:"listOfItems/getByCategory",
        })
    }
}
</script>
<style scoped>
.category-name-container{
    margin-top:25px;
    margin-bottom:15px;
}
.category-name-container p{
    font-size: 24px;
    padding:10px;
}
.items-list-container{
    display: flex;
    flex-wrap: wrap;
}
.subcategories-container{
    display: block;
    padding:10px;
}
.subcategories-container p{
    font-size:20px;
}
.subcategories-container-values{
    border-radius: 5px;
    background-color: white;
    padding:5px;
}
.subcategories-container-values p{
    padding-left:10px;
}
.subcat-value{
    font-size: 17px;
}
.subcat-value{
    font-size: 17px;
}

.subcat-edit-link{
    font-size: 18px;
    padding-left:5px;
    color:#6990b3;


}
</style>