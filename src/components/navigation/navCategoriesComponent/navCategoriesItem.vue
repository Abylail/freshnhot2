<template>
    <a class="root" v-on:click="itemClick">
        <!-- <router-link class="image-container" to="/korzina" >GO</router-link> -->
        <div class="image-container" :style="`background-image: url(${img_src})`">
            <!-- <img :src="category.img_src"/> -->
            <!-- <img src="@/assets/icons/sushi.svg"/>     -->
        </div>
        <p class="itemName">{{category.name}}</p>
    </a>
</template>
<script>
export default {
    name:'navCategoriesItem',
    data() {
        return {
            img_src: null
        }
    },
    mounted() {
        this.img_src = 'https://api.freshnhot.kz'+this.category.img_src;
    },
    props:['category'],
    methods:{
        async itemClick(){
            let elemTop = document.getElementById("categoryid-"+this.category.id).offsetTop
            window.scrollTo({top:elemTop-160, behavior: "smooth"})
        },
    }
}
</script>
<style scoped>
    p{
        margin:0;        
    }
    p.itemName{
        margin-top:3px;
        text-align: center;
        margin-left:auto;
        margin-right:auto;
    }

    .root{
        margin-top: 6px;
        display: inline-block;
        margin-left:30px;
        margin-right:30px;
        color:white;
        cursor: pointer;
        text-align: center;
    }
    .image-container{
        height:45px;
        width:45px;
        background-size: contain;
        margin-left:auto;
        margin-right:auto;
    }
    .image-container img{
        height: 100%;
    }
</style>
