<template>
    <div class="text-page">
        <smartHeader
            :fixed="true"
            :shadow="true"
            :logo="true"
            :phone="true"
        />
        <div class="text-edge" v-for="item in getList" :key="item.id">
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
import { mapState } from 'vuex'
import smartHeader from '@/components/header/smartHeader'

export default {
    name:'textPageView',
    data(){
        return{
            pageName:''
        }
    },
    methods:{
        setListByParam(){
            console.log(this.pageName);
        }
    },
    mounted(){
        this.pageName = this.$route.params.pageName;
        console.log("store", this.getList)
    },
    components:{
        smartHeader
    },
    computed:{
        ...mapState({
            getList(state,getters){
                return getters[`${this.pageName}/getList`]
            }
        }),
    },
}
</script>
<style scoped>
    .text-page{
        padding-top:60px;
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