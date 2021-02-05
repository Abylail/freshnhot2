<template>
    <header>
        <div class="left side">
            <router-link to="/" class="logo"></router-link>
        </div>
        <div class="right side">
            <div class="phone-button"></div>
            <p class="phone-number">8(777)777 77 77</p>
        </div>
        
    </header>
</template>
<script>
export default {
    name:'poorHeader',
}
</script>
<style scoped>
    header{
        height: 60px;
        background-color: white;

        padding-left:3%;
        padding-right:3%;
    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color:black;
    }
    .side{
        height: 100%;

        display: flex;
        align-items: center;
    }
    .logo{
        height: 50px;
        width:50px;
        background-color: black;
    }

    .phone-number{
        font-size:14px;
    }
    .phone-button{
        height: 35px;
        width: 35px;
        background-color: black;

        margin-right: 5px;
    }
</style>