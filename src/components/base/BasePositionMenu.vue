<template>
    <div class="one-position" v-bind:class="{'one-position-fixed':fixed}">
        <div class="position-container" v-bind:class="{'position-container-fixed':fixed}" ref="container">
            <lazy-component @show="showImage = true">
            <div class="image" :style="`background-image: url(${imgSrc})`" v-if="showImage"></div>
            </lazy-component>
            <div class="info">
                <div class="info-main">
                    <div class="name"><h3 class="name">{{item.name}}</h3></div>
                    <div><p class="description">{{item.description}}</p></div>
                    <div class="extra-description">
                        <p class="extra-description" v-if="item.calories">{{item.calories}} ккал</p>
                        <p class="extra-description" v-if="item.calories && item.weight"> | </p>
                        <p class="extra-description" v-if="item.weight">{{item.weight}} грамм</p>
                        </div>
                </div>
                <div class="info-footer">
                    <p class="price">{{price}} ₸</p>
                    <div class="add-drop">
                        <a class="drop" @click="removeItemInShopiingCart"></a>
                        <p>{{itemAmount}}</p>
                        <a class="add" @click="addItemInShoppingCart"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex';
export default {
    name:'BasePositionMenu',
    data(){
        return {
            imgSrc: null,
            itemAmount: 0,
            showImage: false
        }
    },
    methods:{
        async addItemInShoppingCart(){
            let shoppingCartButton = document.getElementById('shopping-cart-button');
            if (shoppingCartButton) {
              shoppingCartButton.classList.add("drop");
              setTimeout(() => {
                document.getElementById('shopping-cart-button').classList.remove("drop");
              }, 500)
            }
            await this.addItem(this.item);
            this.itemAmount = this.getItemAmount(this.item.id);
        },
        async removeItemInShopiingCart(){
            await this.getItemAmount(this.item.id) > 0 && this.removeItem(this.item.id)
            this.itemAmount = this.getItemAmount(this.item.id);
        },
        async removeAllItemInShopiingCart(){
            await this.removeAllItem(this.item.id)
            this.itemAmount = this.getItemAmount(this.item.id);
        },
        ...mapActions({
            addItem:"shoppingCart/addItem",
            removeItem:"shoppingCart/removeItem",
            removeAllItem:"shoppingCart/removeAllItem"
        })
    },
    mounted(){
        this.itemAmount = this.getItemAmount(this.item.id);
        if(this.item.img_src && this.item.img_src !== "") {
            this.imgSrc = 'https://api.freshnhot.kz'+this.item.img_src;
        }
    },
    props: [
        'item',
        'isShoppingCart',
        'fixed'
    ],
    computed:{
        price :function() {
            return this.item.price.split(".")[0];
        },
        ...mapGetters({
            getItemAmount:"shoppingCart/getItemAmount",
        })
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
        min-height: 180px;
        width: calc(100% - 20px);
        padding: 5px 10px;
        color: black;
    }
    .position-container {
        background-color: white;
        height: 100%;
        border-radius: 5px;
        display: grid;
        grid-template-columns:160px 1fr;
        grid-template-areas: "image info";
        -webkit-box-shadow: 0px 4px 21px 5px rgba(0,0,0,0.3); 
        box-shadow: 0px 4px 21px 5px rgba(0,0,0,0.3);
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
        background-color: white;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        height: 100%;
    }
    img.image {
      grid-area: image;
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
    div.info {
        grid-area: info;
        display: grid;
        grid-template-rows: 1fr 40px;
        grid-template-areas: "main" "footer";
        padding-left: 5px;
        padding-right: 15px;
    }
    div.name {
        padding: 0;
        margin-top: 15px;
        margin-bottom: 10px;
    }
    h3.name {
        padding: 0;
        color: black;
        font-size: 18px;
        line-height: 1.425rem;
      }
      div.info-main {
        grid-area: main;
        padding-right: 5px;
    }
    .description {
        font-size: .875rem;
        color: #484848;
        line-height: 1.125rem;
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
        padding-bottom: 15px;
    }
    p.price {
        font-size: 22px;
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
        font-size: 22px;
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
      font-size: 52px;
      margin-left: 15px;
    }
    a.drop {
        margin-right: 15px;
        margin-left: 5px;
    }
    a.drop:before, a.add:before, a.add:after {
        content: "";
        position: absolute;
        background-color: black;
        width: 3px;
        height: 22px;
        margin-left: -2px;
        border-radius: 5px;
    }
    a.add:before, a.drop:before {
        transform: rotate(90deg);
    }
    a.drop:before {
        background-color: #a3a3a3;
    }
    a:active {
        opacity: .5;
        background: none;
    }
    


    @media (min-width: 700px) {
        .one-position {
            min-height: 300px;
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
        div.info {
            padding-right: 5px;
        }
    }
</style>