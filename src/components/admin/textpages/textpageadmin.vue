<template>
    <div>
        <div class="loader-include" v-if="showLoader">
            <loader/>
        </div>

        {{storePath}}
        <div class="edge-container"></div>
    </div>
</template>
<script>
import loader from '../../../components/loader/loader'

export default {
    name:'textpageadmin',
    data(){
        return{
            pageName:'',
            storePath:'',
            list:[],
            showLoader:true,
        }
    },
    components:{
        loader,
    },
    mounted(){
        this.pageName = this.$route.params.linkname;
        this.storePath ='sales/getList';
    },
    computed:{
        
    }
}
</script>