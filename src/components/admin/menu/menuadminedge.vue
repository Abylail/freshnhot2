<template>
    <div class="item-edge-container">
        <div class="item-edge">
            <div class="item-header row">
                <div class="item-minicontainer">
                    <p class="static-text">Имя</p>
                    <p class="dinamic-text">
                        {{item.name}}
                    </p>
                </div>
                <input type="checkbox" v-model="stockBoolean" v-on:change="setStock" class="check-item"/>
            </div>
            <div class="category-container row">
              <div class="item-minicontainer">
                <p class="static-text">Категория</p>
                <select v-model="category_id">
                  <option
                    v-for="category in categoryList"
                    :key="category.id"
                    :value="category.id"
                  >{{category.name}}</option>
                </select>
              </div>
            </div>
            <div class="description-container row">
                <div class="item-minicontainer">
                    <p class="static-text">Описание</p>
                    <p class="dinamic-text">
                        {{item.description}}
                    </p>
                </div>
            </div>
            <div class="extra-desriptions-container row">
                <div class="item-minicontainer">
                    <p class="static-text">Штук</p>
                    <p class="dinamic-text">
                        {{item.piecesAmount}}
                    </p>
                </div>
                <div class="item-minicontainer">
                    <p class="static-text">Калорий</p>
                    <p class="dinamic-text">
                        {{item.calories}}
                    </p>
                </div>
                <div class="item-minicontainer">
                    <p class="static-text">Грам</p>
                    <p class="dinamic-text">
                        {{item.weight}}
                    </p>
                </div>
                <div class="item-minicontainer">
                    <p class="static-text">Цена</p>
                    <p class="dinamic-text">
                        {{item.calories}}
                    </p>
                </div>
            </div>
            <div class="image-container row">
                 <div class="item-minicontainer">
                    <p class="static-text">Картинка</p>
                    <div class="image" v-bind:style="{'background-image':'url('+imgSrc+')'}"></div>
                </div>
            </div>
            <div class="subcategories-container">
                <p class="static-text">Подкатегории</p>
                    <p v-for="subcategory in item.subCategories" :key="subcategory" class="dinamic-text">
                    {{subcategory}}
                    </p>
            </div>
            <button class="edit-button" v-on:click="editButtonClick">Редактировать</button>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import router from '../../../router'
export default {
    name:'itemEdge',
    props:['item'],
    computed:{
        ...mapGetters({
            stock:"itemsStock/getStockById",
            categoryList: "categories/getList"
        })
    },
    methods:{
        setStock(){
            this.setItem([this.item.id,this.stockBoolean])
        },
        ...mapActions({
            setItem:"itemsStock/setItem",
        }),
        editButtonClick(){
            router.push(this.editUrl)
        }
    },
    data(){
        return{
            stockBoolean:false,
            imgSrc:'https://www.askc.us/wp-content/uploads/2017/04/default-image-720x530.jpg',
            editUrl:"",
            category_id:null,
        }
    },
    mounted(){
        this.stockBoolean = this.stock(this.item.id)
        if(this.item.imgSrc && this.item.imgSrc!=""){
            this.imgSrc = this.item.imgSrc
        }

        this.editUrl = "/admin-panel/editmenu/"+this.item.id
    },
    
}
</script>
<style scoped>
    .row{
        display:block;
        padding-bottom:8px;
    }
    .item-edge-container{
        padding:10px;
        width: 100%;
        max-width:450px;
    }
    .item-edge{
        padding-left:10px;
        padding-right:10px;
        min-height: 200px;
        border-radius:5px;
        background-color: white;
    }

    .item-header{
        min-height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .check-item{
        height: 30px;
        width:30px;
    }
    .item-minicontainer p{
        display: block;
    }
    .static-text{
        font-size: 16px;
        color:gray;
    }
    .dinamic-text{
        font-size:17px;
    }
    .extra-desriptions-container{
        display: flex;
        flex-wrap: wrap;
    }
    .extra-desriptions-container div{
        margin-right: 10px;
    }
    .image{
        height: 150px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .subcategories-container .dinamic-text{
        display: block;
        padding-left:20px;
    }
    .check-item{
        cursor: pointer;
    }
    .edit-button{
        margin-top:30px;
        margin-bottom:30px;
        background-color: rgb(95, 95, 255);
        color:white;
        border-radius: 4px;
        border:none;

        height: 50px;
        width: 100%;
        font-size:24px;
        cursor:pointer;
    }



    
    
    @media(min-width:700px){
        .item-edge-container{
        width: calc(50% - 22px);
        }
    }
    @media(min-width:1300px){
        .item-edge-container{
        width: calc(33% - 22px);
        }
    }

</style>