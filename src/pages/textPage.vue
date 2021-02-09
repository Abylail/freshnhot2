<template>
    <div class="text-page">
        <poorHeader/>
        <div class="text-edge"></div>
    </div>
</template>
<script>
import poorHeader from '../components/header/poorHeader'

export default {
    name:'textPage',
    components:{
        poorHeader
    },
    mounted(){
        console.log(this.$route.params.pageName);
    }
}
</script>
<style scoped>
    .text-page{
        min-height: 100vh;
    }
</style>