<template>
    <!-- <div :class="{'edge':!fixedSize,'edge-fixed':fixedSize}">
        <div :class="{'edge-container':!fixedSize,'edge-container-fixed':fixedSize}">
            <div :class="{'image-block':!fixedSize,'image-block-fixed':fixedSize}">
                <div class="image-container">
                    <div class="image" v-bind:style="{'background-image':'url('+imgSrc+')'}"></div>
                </div>
            </div>
            <div :class="{'text-block':!fixedSize,'text-block-fixed':fixedSize}">
                <div class="text-container">
                    <div class="name-container">
                        <h3 class="item-name">{{item.name}}</h3>
                    </div>
                    <div class="description-container">
                        <p class="description">{{item.description}}</p>
                        <div class="extra-description-container">
                            <div v-if="item.piecesAmount" class="extra-description-container-half">
                                <div class="extra-description-amount">
                                    <p class="extra-description-amount">
                                        {{item.piecesAmount+" шт"}}
                                    </p>
                                </div>
                            </div>
                            <div class="extra-description-container-half">
                                <p v-if="item.weight && item.piecesAmount" class="weightCaloriesDevider"> | </p>
                                <p v-if="item.weight" class="weight">{{item.weight+" гр"}}</p>
                                <p v-if="item.weight && item.calories" class="weightCaloriesDevider"> | </p>
                                <p v-if="item.calories" class="calories">{{item.calories+" калл"}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="price-add-container">
                        <p v-if="item.price" class="price">{{item.price+" ₸"}}</p>
                        <div class="shopping-cart">
                            <a v-on:click="addItemInShoppingCart" class="add button"></a>
                            <div v-if="getItemAmount(item.id)>0" class="counter">
                                {{getItemAmount(item.id)}}
                            </div>
                            <a v-if="getItemAmount(item.id)>0" v-on:click="removeItemInShopiingCart" class="remove button"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div> -->
    <div class="one-position" v-bind:class="{'one-position-fixed':fixed}">
        <div class="position-container" v-bind:class="{'position-container-fixed':fixed}">
            <div class="image" :style="`background-image:url(${imgSrc})`"></div>
            <div class="info">
                <div class="info-header"><h2>{{item.name}}</h2></div>
                <div class="info-main">
                    <div><p class="description">{{item.description}}</p></div>
                    <div class="extra-description">
                        <p class="extra-description" v-if="item.calories">{{item.calories}} ккал</p>
                        <p class="extra-description" v-if="item.calories && item.weight"> | </p>
                        <p class="extra-description" v-if="item.weight">{{item.weight}} грамм</p>
                        </div>
                </div>
                <div class="info-footer">
                    <p class="price">{{item.price}} тг</p>
                    <div class="add-drop">
                        <a class="drop" @click="removeItemInShopiingCart"><img src="@/assets/icons/minus.svg" /></a>
                        <p>{{getItemAmount(item.id)}}</p>
                        <a class="add" @click="addItemInShoppingCart">+</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    name:'onePositionMenu',
    data(){
        return {
            imgSrc:"https://www.askc.us/wp-content/uploads/2017/04/default-image-720x530.jpg",
        }
    },
    methods:{
        addItemInShoppingCart(){
            this.addItem(this.item)
        },
        removeItemInShopiingCart(){
            this.getItemAmount(this.item.id) > 0 && this.removeItem(this.item.id)
        },
        removeAllItemInShopiingCart(){
            this.removeAllItem(this.item.id)
        },
        ...mapActions({
            addItem:"shoppingCart/addItem",
            removeItem:"shoppingCart/removeItem",
            removeAllItem:"shoppingCart/removeAllItem"
        })
    },
    mounted(){
        if(this.item.img_src && this.item.img_src!=""){
            this.imgSrc = 'https://api.freshnhot.kz'+this.item.img_src;
            console.log(this.imgSrc);
        }
        console.log("fixed-", this.fixed?"true":"false");
    },
    props: [
        'item',
        'isShoppingCart',
        'fixed'
    ],
    computed:{
        ...mapGetters({
            getItemAmount:"shoppingCart/getItemAmount",
        }),
    },
}
</script>
<style scoped> 
    .one-position-fixed {
        height: auto !important;
        min-height: 160px !important;
        width: 100% !important;
    }
    .one-position {
        min-height: 160px;
        width: 100%;
        padding: 10px;
        color: black;
    }
    .position-container {
        background-color: white;
        height: 100%;
        border-radius: 5px;
        display: grid;
        grid-template-columns:160px 1fr;
        grid-template-areas: "image info";
        -webkit-box-shadow: 0px 4px 21px 5px rgba(0,0,0,0.7); 
        box-shadow: 0px 4px 21px 5px rgba(0,0,0,0.7);
    }
    .position-container-fixed {
        grid-template-columns:160px 1fr !important;
        grid-template-areas: "image info" !important;
        grid-template-rows: none !important;
    }
    div.image {
        grid-area: image;
        background-size: cover;
        background-position: 50% 50%;
        background-color: black;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    div.info {
        grid-area: info;
        display: grid;
        grid-template-rows: 35px 1fr 35px;
        grid-template-areas: "header" "main" "footer";
        padding-left: 5px;
    }
    div.info-header {
        grid: header;
        display: flex;
        align-items: center;
    }
    div.info-header h2 {
        font-size: 18px;
    }
    div.info-main {
        grid-area: main;
        padding-top: 5px;
        padding-right: 5px;
    }
    .description {
        font-size: 14px;
    }
    div.extra-description{
        margin-top: 5px;
        display: flex;
        flex-direction: row;
    }
    p.extra-description {
        font-size: 14px;
        color: gray;
        display: inline-block;
    }


    div.info-footer {
        grid-area: footer;
        display: flex;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    p.price {
        font-size: 18px;
    }
    div.add-drop {
        display: flex;
        flex-direction: row;
        height: 100%;
        padding-right: 5px;
    }
    .add-drop p {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
    .add-drop a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        width: 20px;
        cursor: pointer;
    }
    a.add {
        margin-left: 5px;
    }
    a.drop {
        margin-right: 5px;
    }
    a.drop img {
        height: 50%;
    }
    


    @media (min-width: 500px) {
        .one-position {
            height: 300px;
            width: 200px;
        }
        .position-container {
            grid-template-columns: none;
            grid-template-rows: 150px 1fr;
            grid-template-areas: "image" "info";
        }
        .image {
            border-bottom-left-radius: 0px !important;
            border-top-right-radius: 5px;
        }
    }
</style>