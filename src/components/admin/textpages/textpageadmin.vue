<template>
    <div>
        {{storePath}}
        <div class="edge-container"></div>
    </div>
</template>
<script>
export default {
    name:'textpageadmin',
    data(){
        return{
            pageName:'',
            storePath:'',
            list:[],
        }
    },
    mounted(){
        this.pageName = this.$route.params.linkname
        this.storePath ='sales/getList'
        console.log(this.storePath);
    },
    computed:{
        
    }
}
</script>