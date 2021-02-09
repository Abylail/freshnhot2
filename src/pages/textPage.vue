<template>
    <div class="text-page">
        <poorHeader/>
        <div class="text-edge" v-for="item in list" :key="item.id">
            <div v-if="item.name && item.name!='' && item.name!=null" class="text-name-container">
                <h2 class="text-name">{{item.name}}</h2>
            </div>
            <div v-if="item.description && item.description!='' && item.description!=null" class="text-description-container">
                <p class="text-description">{{item.description}}</p>
            </div>
            <div v-if="item.imgSrc && item.imgSrc!='' && item.imgSrc!=null" class="text-image-container">
                <img class="text-image" :src="item.imgSrc"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import poorHeader from '../components/header/poorHeader'

export default {
    name:'textPage',
    data(){
        return{
            list:[],
        }
    },
    components:{
        poorHeader,
    },
    computed:{
        ...mapGetters({
            getList:"about/getList"
        })
    },
    mounted(){
        console.log(this.$route.params.pageName);
        this.list = this.getList
    }
}
</script>
<style scoped>
    .text-page{
        min-height: 100vh;
        color:white;
    }

    .text-name-container{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top:50px;
    }

    .text-description-container{
        margin-top:20px;
        padding-left:5%;
        padding-right:5%;
    }
</style>