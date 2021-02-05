<template>
    <a class="root" v-on:click="itemClick">
        <!-- <router-link class="image-container" to="/korzina" >GO</router-link> -->
        <div class="image-container"></div>
        <p class="itemName">{{category.name}}</p>
    </a>
</template>
<script>
export default {
    name:'navCategoriesItem',
    props:['category'],
    methods:{
        itemClick(){
            console.log(this.$refs);
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
        border:1px solid white;

        margin-left:auto;
        margin-right:auto;
    }
</style>
