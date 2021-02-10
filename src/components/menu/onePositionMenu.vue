<template>
    <div class="edge">
        <div class="edge-container">
            <div v-if="isShoppingCart" v-on:click="removeAllItemInShopiingCart" class="remove-button"></div>
            <div class="image-block">
                <div class="image-container">
                    <div class="image" v-bind:style="{'background-image':'url('+imgSrc+')'}"></div>
                </div>
            </div>
            <div class="text-block">
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
            this.removeItem(this.item.id)
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
        if(this.item.imgSrc && this.item.imgSrc!=""){
            this.imgSrc = this.item.imgSrc
        }
    },
    props:[
        'item',
        'isShoppingCart'
    ],
    computed:{
        ...mapGetters({
            getItemAmount:"shoppingCart/getItemAmount",
        }),
    },
}
</script>
<style scoped> 
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,600;0,700;1,400&display=swap');

    .remove-button{
        position: relative;
        top:-43%;
        left:90%;
    }
    .remove-button:before, .remove-button:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 16px;
  width: 2px;
  background-color: rgb(180, 179, 179);
}
.remove-button:before {
  transform: rotate(45deg);
}
.remove-button:after {
  transform: rotate(-45deg);
}
    .edge{
        height: 400px;
        width:23%;

        /* margin-left:auto; */
        /* margin-right:auto; */

        
        padding:1%;
        color:black;

    }
    .edge-container{
        height: 100%;
        border-radius: 7px;
        overflow: hidden;

        background-color: rgb(231, 231, 231);

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        -webkit-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.5);
            box-shadow: 0px 10px 11px 7px rgba(0, 0, 0, 0.5);
    }
    .image-block{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .image{
        height: 200px;
        width: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;

        margin:auto;
    }

    .text-block{
        display: flex;
        justify-content: center;
        align-items: center;

        width:100%;
    }
    .text-container{
        height: 90%;
        width: 90%;
    }
    h3.item-name{
        font-size: 24px;
        font-family:'Montserrat', sans-serif;
        font-weight: 600;

        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    p.description{
        font-size: 10px;
        padding-left:2px;

        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        color:gray;
    }
    .extra-description-container{
        height: 30px;
        display: flex;
        flex-direction: row;
    }
    .extra-description-container-half{
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-right: 5px;
    }
    div.extra-description-amount{
        height: 28px;
        width: auto;

        display: flex;
        /* justify-content: center; */
        align-items: center;
    }
    p.extra-description-amount{
        /* border-radius: 5px;
        border:1.5px solid red;
        color:red; */

        
        
        /* padding-left:4px;
        padding-right:4px; */
    }
    p.weightCaloriesDevider{
        margin-left:2px;
        margin-right:2px;
    }

    .price-add-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .shopping-cart{
        /* display: inline-block; */

        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .button{
        height: 30px;
        width: 30px;

        border-radius: 40px;

        display:flex;
        justify-content: center;
        align-items: center;
    }
    .add{
        /* margin-right: 5px; */
        margin-left: 8px;

        display:inline-block;
        width:30px;
        height:30px;

  
        background:
            linear-gradient(rgb(160, 105, 4),rgb(160, 105, 4)),
            linear-gradient(rgb(160, 105, 4),rgb(160, 105, 4));
        background-position:center;
        background-size: 70% 3px,3px 70%; /*thickness = 2px, length = 50% (25px)*/
        background-repeat:no-repeat;

        border:2px solid rgb(160, 105, 4);
    }
    .remove{
        margin-right: 8px;
        margin-left: 8px;

        display:inline-block;
        width:30px;
        height:30px;
  
        background:
            linear-gradient(#000000,#000000);
        background-position:center;
        background-size: 70% 3px,3px 70%; /*thickness = 2px, length = 50% (25px)*/
        background-repeat:no-repeat;

        opacity: .6;
    }
    .counter{
        display: flex;
        justify-content: center;
        align-items: center;

        font-size:22px;
    }
    p.price{
        font-size:26px;
        color:rgb(160, 105, 4);
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        
    }


    @media (max-width:1100px){
        .edge{
            width:31%;
        }
    }
    @media (max-width:900px) {
        .edge{
            width:48%;
        }
    }
    @media (max-width:600px){
        .edge{
            height: 140px;
            width: 98%;
            padding:2%;
            padding-left: 3%;
            padding-right:3%;
        }
        .edge-container{
            display: flex;
            flex-direction: row;
            align-items: center;
            
            background-color: white;
            color:black;
        }
        .image{
            height: 100%;
            width: 100%;

        }
        .image-block{
            width: 40%;
            height: 100%;

        }
        .image-container{
            height: 100%;
            width: 100%;
        }
        div.name-container{
            margin-bottom:5px;
        }
        h3.item-name{
            font-size:20px;
        }
        p.description{
            font-size: 12px;
        }
        p.price{
            font-size: 20px;
        }
        .text-block{
            width: 60%;
            height: 100%;
            padding-left:10px;
        }
        .text-container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            height: 90%;
            width: 100%;
            padding-right:3%;
        }
        .price-add-container{
            height: 30px;
        }
        .extra-description-amount{
            font-size: 13px;
        }
        .extra-description-container{
            height: 15px;
        }
        .weight,.weightCaloriesDevider,.calories{
            font-size: 13px;
            color:rgb(0, 0, 0);
        }
        .button{
            height: 23px;
            width: 23px;
        }
    }
</style>