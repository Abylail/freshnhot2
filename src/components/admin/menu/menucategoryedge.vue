<template>
    <div class="category-edge">
        <div class="category-name-container">
            <p>{{category.name}}</p>
            <img class="category-image" :src="`https://api.freshnhot.kz${category.img_src}`"/>
            <button class="delete" @click="deleteCategoryHandle">Удалить</button>
        </div>
        <div class="subcategories-container">
            <p>Подкатегории</p>
            <div class="subcategories-container-values">
                <p v-for="(subcat, index) in category.subs" :key="index">
                  <span class="subcat-name">{{subcat.name}}</span>
                  <button class="subcat-delete" @click="deleteSubcategory(subcat.id)">Удалить</button>
                </p>
                <div class="create-subcategory">
                  <input type="text" v-model="newSubcategory"/>
                  <button @click="createSubcategoryHandle">Создать</button>
                </div>
            </div>
        </div>
        <div class="items-list-container">
            <itemEdge
                v-for="item in category.products"
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>
<script>
import itemEdge from './menuadminedge'

import {mapActions, mapGetters} from 'vuex'
export default {
    name:'categoryEdge',
    props:['category'],
    data(){
      return {
        newSubcategory:'',
      }
    },
    components:{
        itemEdge
    },
    methods:{
      deleteCategoryHandle(){
        this.deleteCategory(this.category.id);
      },
      deleteSubcategory(subcat_id){
        this.deleteSubcategoryAction([this.category.id, subcat_id]);
      },
      createSubcategoryHandle() {
        if(this.newSubcategory !== '') {
          this.createSubcategory({
            name:this.newSubcategory,
            category_id: this.category.id
          });
          this.newSubcategory = '';
        }
      },
      ...mapActions({
        createSubcategory:"categories/createSubcategory",
        deleteSubcategoryAction: "categories/deleteSubcategoryAction",
        deleteCategory: "categories/deleteCategory"
      })
    },
    computed:{
        ...mapGetters({
            list:"listOfItems/getByCategory"
        })
    }
}
</script>
<style scoped>
button.delete{
  background-color: red;
  padding: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
  border: none;
  color: white;
  max-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
.subcat-delete{
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: red;
  color: white;
  border:none;
  border-radius: 5px;
  padding:5px;
  padding-top: 3px;
  padding-bottom: 3px;
}
.category-image{
  display: inline;
  max-height: 50px;
}
.category-name-container{
    margin-top:25px;
    margin-bottom:15px;
    display: flex;
    flex-direction: row;
  align-items: center;
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