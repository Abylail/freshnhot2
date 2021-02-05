<template>
    <div class="main-menu-admin">
        <div class="list-container">
            <categoryEdge
            v-for="category in categories"
            :key="category.id"
            v-bind:category="category"
            />
        </div>
        <div class="save-button-container">
            <button>Сохранить</button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

import categoryEdge from './menucategoryedge'

export default {
    name:'menuadmin',
    components:{categoryEdge},
    computed:{
        ...mapGetters({
            categories:'categories/getList'
        })
    },
}
</script>
<style scoped>
    .save-button-container{
        margin-top:30px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .save-button-container button{
        background-color: red;
        color:white;
        border:none;
        font-size:22px;
        height: 40px;
        border-radius: 5px;
    }
    @media(max-width:700px){
        .save-button-container button{
            width: 90%;
        }
    }
</style>