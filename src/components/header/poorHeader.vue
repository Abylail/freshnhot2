<template>
    <header>
        <div class="left side">
            <router-link to="/" class="logo">
                <img src="../../assets/logo.svg" alt="logo" class="logo"/>
            </router-link>
        </div>
        <div class="right side">
            <div class="phone-container">
                <a class="phone-button" href="tel:+77056707891"><img src="https://img.icons8.com/ios-filled/100/ffffff/phone.png"/></a>
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
        background-color: rgb(33 33 33);

        padding-left:3%;
        padding-right:3%;
    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color:black;
        opacity: .98;
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

        font-family: Montserrat;
        font-weight: bold;
        padding-top:3px;
    }
    .phone-button{

        margin-right: 5px;
        background-color: black;

        display: flex;

        padding:5px;
        border-radius: 30px;
    }
    .phone-button img{
        height: 16px;
        width: 16px;
    }
    .phone-container{
        background-color: white;

        border-radius: 40px;
        padding:12px;
        padding-left:3px;
        padding-top:3px;
        padding-bottom:3px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
</style>