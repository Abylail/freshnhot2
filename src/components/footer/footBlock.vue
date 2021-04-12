<template>
    <footer>
        <div class="big-footer-top-container">
        <div class="links footer-block">
            <div class="name-container">
                <p class="primary">Freshnhot</p>
            </div>
            <div class="links-container">
                <router-link to="/" class="link secondary">На главную</router-link>
<!--                <router-link to="/text/about" class="link">О компании</router-link>-->
<!--                <router-link to="/text/delivery" class="link">Доставка</router-link>-->
<!--                <router-link to="/text/events" class="link">События</router-link>-->
<!--                <router-link to="/text/contacts" class="link">Контакты</router-link>-->
<!--                <router-link to="/text/sales" class="link">Акции</router-link>-->
            </div>
        </div>
        <div class="info footer-block">
            <div class="name-container">
                <p class="primary">Закажите</p>
            </div>
            <div class="info-rows-container">
                <div class="info-row">
                    <div class="info-row-logo">
                        <img src="@/assets/icons/smartphones.png"/>
                    </div>
                    <div class="info-row-text-block">
                        <div class="info-row-text-top">
                            <p class="secondary">Номер доставки</p>
                        </div>
                        <div class="info-row-text-bottom">
                            <p class="secondary">8 (778) 010 06 90</p>
                        </div>
                    </div>
                </div>

                <div class="info-row">
                    <div class="info-row-logo">
                        <img src="@/assets/icons/clock.png"/>
                    </div>
                    <div class="info-row-text-block">
                        <div class="info-row-text-top">
                            <p class="secondary">Работаем ежедневно</p>
                        </div>
                        <div class="info-row-text-bottom">
                            <p class="secondary">с 10:00 до 21:45</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="socail-networks footer-block">
            <div class="name-container">
                <p class="primary">Следите за нами</p>
            </div>
            <div class="socail-networks-buttons-container">
                <a class="info-row-logo" href="https://instagram.com/freshnhot.kz?igshid=ojm1tl08rmys" target="_blank">
                    <img src="@/assets/icons/instagram.png"/>
                </a>
            </div>
        </div>
        </div>
        <div class="big-footer-bottom-container">

        </div>
    </footer>
</template>
<script>
export default {
    name:'footBlock',
}
</script>
<style scoped>
footer{
    background-color: #2C2C2C;
    padding-top:30px ;
    padding-bottom:30px;
}
.name-container{
    margin-bottom:10px;
}
.name-container p{
    font-size:18px;
}

.footer-block{
    padding-left:3%;
    padding-right:3%;

    padding-bottom: 15px;
}
.link{
    width:49%;
    font-size:14px;
    text-decoration: none;

    margin-top:5px;
    margin-bottom:5px;
}
.links-container{
    display: flex;
    flex-wrap: wrap;
}

.info-row{
    display: flex;
    flex-direction: row;
}
.info-row-logo{
    height:40px;
    width:40px;

    /* background-color: black; */
    margin-right:8px;
}
.info-row-logo img{
    height: 100%;
    width: 100%;
}
.info-row-text-block{
    display: flex;
    flex-direction: column;
}

.socail-networks-button{
    height: 40px;
    width: 40px;

    background-color: black;
    margin-right:15px;
}
.socail-networks-buttons-container{
    display: flex;
    flex-direction: row;
}

.big-footer-bottom-container{
    height: 30px;
    border-top:1px solid gray;
}
.primary {
    color: white;
}
.secondary {
    color:gray;
}
</style>