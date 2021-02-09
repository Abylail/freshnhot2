<template>
    <header>
        <div class="left side">
            <router-link to="/" class="logo">
                <img src="../../assets/logo.svg" alt="logo" class="logo"/>
            </router-link>
        </div>
        <div class="right side">
            <div class="phone-container">
                <a class="phone-button" href="tel:+77056707891">T</a>
                <p class="phone-number">8 (777) 777 77 77</p>
            </div>
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
        background-color: rgb(0, 0, 0);

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
        height: 45px;
        width: 45px;
    }

    .phone-number{
        color:black;

        display: inline;
        font-family: Montserrat;
        font-weight: bold;
    }
    .phone-button{
        height: 35px;
        width: 35px;

        margin-right: 5px;
        display: inline;
    }
    .phone-container{
        background-color: white;

        border-radius: 40px;
        padding:12px;
        padding-top:4px;
        padding-bottom:5px;
    }
</style>