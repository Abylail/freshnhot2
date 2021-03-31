<template>
    <div class="main-menu-admin">
        <button class="sync" @click="syncHandle">Синхронизировать c фронтпад</button>
        <div class="list-container">
            <categoryEdge
            v-for="category in categoriesList"
            :key="category.id"
            :category="category"
            />
          <div class="create-category">
            <p>Создать категорию</p>
            <input v-model="newCategoryName" placeholder="Имя категории"/>
            <input type="file" accept="image/*" @change="selectNewImageCategory"/>
            <button @click="createCategory">Создать</button>
          </div>
          <div class="devider-title" v-if="emptyCategory.length > 0"><p>Без категории</p></div>
          <div class="item-list-no-category">
            <menuadminedge
              v-for="item in emptyCategory"
              :key="item.id"
              :item="item"
            />
          </div>
          <div class="save-button-container">
            <button class="save" @click="saveStock">Сохранить</button>
          </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { updateStock } from "@/api/products";

import categoryEdge from './menucategoryedge'
import menuadminedge from "@/components/admin/menu/menuadminedge";

export default {
    name:'menuadmin',
    components:{categoryEdge,menuadminedge},
    data(){
      return {
        categoriesList: [],
        newCategoryName:'',
        categoryImage:''
      }
    },
    async mounted() {
      await this.getItems();
      await this.getCategories();
      this.categoriesList = this.categoriesGet;
    },
  watch: {
    categoriesGet: function (val) {
      this.categoriesList = val;
    }
  },
  computed:{
        ...mapGetters({
            categoriesGet:'categories/getList',
            emptyCategory:"listOfItems/getEmtyCategoryItems",
            productList: "listOfItems/getList"
        })
    },
    methods: {
      saveStock() {
        updateStock(this.productList);
      },
      selectNewImageCategory(event){
        this.categoryImage = event.target.files[0];
      },
        ...mapActions({
            getCategories: "categories/getList",
            getItems: "listOfItems/getList",
            synchronization: "listOfItems/synchronization",
            serverCreateCategory: "categories/createCategory"
        }),
        async syncHandle() {
            await this.synchronization();
            this.getCategories();
        },
        createCategory() {
        if(this.categoryImage !== '' && this.newCategoryName !== '') {
          this.serverCreateCategory({
            'name': this.newCategoryName,
            'photo': this.categoryImage
          });
          this.categoryImage = '';
          this.newCategoryName = '';
        }
        }
    }
}
</script>
<style scoped>
.save-button-container {
  text-align: center;
}
button.save{
  font-size: 20px;
  background-color: red;
  color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  border:none;
  margin-bottom: 20px;
}
.devider-title{
  padding-left: 20px;
  font-size: 24px;
}
.item-list-no-category{
  display: flex;
  flex-wrap: wrap;
}
  .create-category{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    max-width: 300px;
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    padding:20px;

    border-radius: 5px;
  }
  .create-category input{
    margin-bottom:20px;
    width: 100%;
    height: 25px;
    font-size: 16px;
  }
  .create-category p{
    width: 100%;
    margin-bottom:20px;
    font-size: 20px;
  }
  .create-category button{
    font-size: 20px;
    background-color: red;
    color:white;
    padding:14px;
    padding-top:7px;
    padding-bottom: 7px;
    border-radius: 5px;
    border: none;
  }

    .sync{
        margin: 10px;
        background-color: red;
        color: white;
        padding:15px;
        border:none;
        border-radius: 5px;
        font-size: 20px;
    }
    .save-button-container{
        margin-top:30px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .save-button-container button{
        background-color: red;
        color:white;
        border:none;
        font-size:22px;
        height: 40px;
        border-radius: 5px;
    }
    @media(max-width:700px){
        .save-button-container button{
            width: 90%;
        }
    }
</style>