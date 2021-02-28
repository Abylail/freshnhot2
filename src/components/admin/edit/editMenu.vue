<template>
    <div class="edit-page">
        <div class="edit-row"><router-link to="/admin-panel"> <div class="go-back"><span class="arrow-left"></span><p>Назад</p></div></router-link></div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Имя</p></div>
            <div class="edit-row-input"><input class="edit-input" type="text" v-model="item.name"/></div>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Описание</p></div>
            <div class="edit-row-input"><textarea class="edit-input edit-input-description" type="text" v-model="item.description"/></div>
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
            <div class="edit-row-input"><input type="tel" class="edit-input" v-model="item.price" v-on:input="priceInput"/></div>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Фото</p></div>
            <div class="edit-row-input">Фото</div>
            <div class="upload-image-container">
                <input type="file" accept="image/*" @change="imageSelected"/>
            </div>
            <button @click="uploadButtonClick" >Загрузить</button>
        </div>
        <div class="edit-row">
            <div class="edit-row-name"><p>Категори name</p></div>
            <div class="edit-row-input"><p>{{getCategoryById(item.categoryId).name}}</p></div>
        </div>


        <button v-on:click="checkButtonClick">check</button>
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
        }
    },
    methods:{
        ...mapActions({
            uploadImage: "listOfItems/uploadImage"
        }),
        checkButtonClick(){
            console.log(this.item);
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
        // this.item = this.getById(this.$route.params.itemId)

        // copy object in local
        this.item = {...this.getById(this.$route.params.itemId)}
    },
    computed:{
        ...mapGetters({
            getById:"listOfItems/getById",
            getCategoryById:"categories/getById"
        }),
    }
}
</script>
<style scoped>
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