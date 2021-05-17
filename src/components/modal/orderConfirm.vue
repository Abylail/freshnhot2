<template>
    <div class="confirm">
        <div class="image">
            <img src="https://img.icons8.com/bubbles/100/000000/verified-account.png"/>
        </div>
        <p class="text"><span class="main">Ваш заказ принят!</span><br><br>Курьер позвонит вам в течении 5 минут для подтверждения заказа :)</p>
    </div>
</template>
<script>
export default {
    name: "OrderConfirm"
}
</script>
<style scoped>
    .confirm {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        background: black;
        z-index: 50;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .text {
        color: gray;
        text-align: center;
        padding: 0 20px;
        font-size: 16px;
    }
    .main {
        font-size: 24px;
        color: white;
    }
</style>