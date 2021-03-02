<template>
    <div class="edit-page">
        <div class="edit-row"><router-link to="/admin-panel"> <div class="go-back"><span class="arrow-left"></span><p>Назад</p></div></router-link></div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Имя</p></div>
            <div class="edit-row-input"><p>{{item.name}}</p></div>
            <p class="help-text">Изменения в Frontpad</p>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Описание</p></div>
            <div class="edit-row-input"><textarea class="edit-input edit-input-description" type="text" v-model="item.description"/></div>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Категория</p></div>
            <div class="edit-row-input">
                <select v-model="item.category_id">
                  <option
                    v-for="category in categoryList"
                    :key="category.id"
                    :value="category.id"
                  >{{category.name}}</option>
                </select>
            </div>
        </div>
      <div class="edit-row" v-if="item.category_id && item.category_id !== null">
        <div class="edit-row-name"><p>Подкатегория</p></div>
        <div class="edit-row-input">
          <select v-model="item.sub_category_id">
            <option
                v-for="category in getSubsById(item.category_id)"
                :key="category.id"
                :value="category.id"
            >{{category.name}}</option>
          </select>
        </div>
      </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Штук</p></div>
            <div class="edit-row-input"><input class="edit-input" type="tel" v-model="item.piecesAmount"  v-on:input="piecesAmountInput"/></div>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Калорий</p></div>
            <div class="edit-row-input"><input class="edit-input" type="tel" v-model="item.calories"  v-on:input="caloriesInput"/></div>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Грамм</p></div>
            <div class="edit-row-input"><input type="tel" class="edit-input" v-model="item.weight" v-on:input="weightInput"/></div>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Цена</p></div>
            <div class="edit-row-input"><p>{{item.price}}</p></div>
            <p class="help-text">Изменения в Frontpad</p>
        </div>
        <div class="edit-row">
          <p class="error">{{errorMessage}}</p>
          <button class="save" @click="save">Сохранить</button>
        </div>
        <div class="edit-row">
          <div class="edit-row-name"><p>Фото</p></div>
          <div class="upload-image-container">
            <input type="file" accept="image/*" @change="imageSelected"/>
          </div>
          <button @click="uploadButtonClick" >Загрузить</button>
      </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name:'editMenu',
    data(){
        return{
            item:{},
            selectedImage:null,
            errorMessage:"",
        }
    },
    methods:{
        ...mapActions({
          uploadImage: "listOfItems/uploadImage",
          updateProduct: "listOfItems/updateProduct",
        }),
        save() {
          this.errorMessage = "";
          if(this.item.sub_category_id && this.item.category_id) {
            this.updateProduct(this.item);
          } else {
            this.errorMessage = "Введите категорию и подкатегорию";
          }
        },
        imageSelected(event){
            this.selectedImage = event.target.files[0];
            console.log(this.selectedImage);
        },
        uploadButtonClick(){
            if(this.selectedImage == null){
                return
            }
            //code
            console.log("handle event",this.selectedImage);
            // this.$store.dispatch('listOfItems/uploadImage',[this.selectedImage]);
            this.uploadImage({"file": this.selectedImage});

        },
        piecesAmountInput(){
            if(!Number(this.item.piecesAmount) || this.item.piecesAmount>101){
                this.item.piecesAmount = this.item.piecesAmount.slice(0,-1)
            }
        },
        caloriesInput(){
            if(!Number(this.item.calories) || this.item.calories>10001){
                this.item.calories = this.item.calories.slice(0,-1)
            }
        },
        weightInput(){
            if(!Number(this.item.weight) || this.item.weight>10001){
                this.item.weight = this.item.weight.slice(0,-1)
            }
        },
        priceInput(){
            if(!Number(this.item.price) || this.item.price>100001){
                this.item.price = this.item.price.slice(0,-1)
            }
        }

    },
    created(){
        // сonnect local state with store
        this.item = this.getById(this.$route.params.itemId);

        // copy object in local
        // this.item = {...this.getById(this.$route.params.itemId)}
    },
    computed:{
        ...mapGetters({
            getById:"listOfItems/getById",
            getCategoryById:"categories/getById",
            categoryList: "categories/getList",
            getSubsById: "categories/getSubsById"
        }),
    }
}
</script>
<style scoped>
.error{
  color: red;
}
button.save{
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: red;
  font-size: 20px;
  color:white;
  border-radius: 10px;
  border: none;
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.help-text {
    color:gray;
    font-style: italic;
    padding-bottom: 10px;
}
.edit-page{
    padding-left:10px;
    padding-right:10px;
    margin-top:10px;
    margin-bottom:10px;
}
.edit-row{
    max-width:1000px;
}
.edit-row-name{
    font-size: 20px;
    color:gray;
}
.edit-input{
    width: 95%;
    max-width: 95%;
    min-width: 95%;
    height: 30px;
    font-size:17px;

    border-radius: 4px;
    border:1px solid black;
}
.edit-input-description{
    height: 120px;
    max-height: 150px;
}
.go-back{
    display: inline;
    margin-top:5px;
    text-decoration: none;
    color:black;

    display: flex;
    flex-direction: row;
    align-items: center;

    font-size:18px;

    margin:0;
    margin-bottom:20px;

    /* width:fit-content; */
}
.arrow-left{
    display: inline-block;
    height: 15px;
    width: 15px;
    border-left:3px solid black;
    border-bottom:3px solid black;

    transform: rotate(45deg);
}
a{
    text-decoration: none;
    display: inline-table;
}
</style>