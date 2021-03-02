<template>
    <div>
        <header class="admin-panel-header">
            <a class="open-navigation-button" v-on:click="toggleNavigator">Навигатор</a>
            <button class="logout" @click="logoutHandle" >Выйти</button>
        </header>
        <div v-bind:class="{'navigator':true,'showNavigator':showNavigator}" v-on:click="hideNavigatorMethod">
            <router-link to="/admin-panel" class="navigator-link">
                <div class="navigator-link">
                    <p class="navigator-link">Меню</p>
                </div>
            </router-link>
            <router-link to="/admin-panel/text/categories" class="navigator-link">
                <div class="navigator-link">
                    <p class="navigator-link">Категории</p>
                </div>
            </router-link>
            <router-link to="/admin-panel/text/about" class="navigator-link">
                <div class="navigator-link">
                    <p class="navigator-link">О компании</p>
                </div>
            </router-link>
            <router-link to="/admin-panel/text/sales" class="navigator-link">
                <div class="navigator-link">
                    <p class="navigator-link">Акции</p>
                </div>
            </router-link>
            <router-link to="/admin-panel/text/delivery" class="navigator-link">
                <div class="navigator-link">
                    <p class="navigator-link">Доставка</p>
                </div>
            </router-link>
            <router-link to="/admin-panel/text/contacts" class="navigator-link">
                <div class="navigator-link">
                    <p class="navigator-link">Контакты</p>
                </div>
            </router-link>
            <router-link to="/admin-panel/text/events" class="navigator-link">
                <div class="navigator-link">
                    <p class="navigator-link">События</p>
                </div>
            </router-link>
        </div>
        <div class="main">
            <router-view :key="$route.fullPath" />
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:'adminPanelView',
    data(){
        return{
            showNavigator:false,
        }
    },
    methods:{
        async logoutHandle() {
            await this.logout();
            this.$router.push("/login");
        },
        showNavigatorMethod(){
            this.showNavigator = true
            
        },
        hideNavigatorMethod(){
            this.showNavigator = false
            
        },
        toggleNavigator(){
            if(this.showNavigator){
                this.hideNavigatorMethod()
            }
            else{
                this.showNavigatorMethod()
            }
        },
        ...mapActions({
            getList: "listOfItems/getList",
            logout: "loginAdmin/logout"
        })
    },

}
</script>
<style scoped>
.logout {
    background-color: red;
    color: white;
}
.admin-panel-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 11;
    position:fixed;
    width: 100%;
    height: 60px;
    background-color:#94b0c9;
    color:white;
    padding-left: 10px;
    padding-right: 10px;
}
.navigator{
    top:60px;
    left:0;
    position: fixed;
    z-index: 11;
    width:300px;
    height: calc(100vh - 60px);
    background-color: white;
    border-right:1px solid black;
    font-size: 24px;

    transition: .3s ease;

}
.main{
    padding-top:60px;
    padding-left: 300px;
    min-height: 100vh;
    background-color: rgb(211, 212, 230);
}
a.navigator-link{
    text-decoration:none;
    
}
div.navigator-link{
    height: 35px;
    width: 100%;
    border-bottom: 1px solid black;

    display:flex;
    align-items: center;
}
p.navigator-link{
    
    padding-left:20px;
    color:black;
}
.open-navigation-button{
    display: none;
}

@media(max-width: 900px){
    .open-navigation-button{
        display: block;
    }
    .main{
        padding-left:0;
    }
    .navigator{
        top:60px;
        left:-300px;
        position: fixed;
        width:200px;
        height: calc(100vh - 60px);
        background-color: white;
        border-right:1px solid black;
        font-size: 20px;
    }
    .showNavigator{
        left:0;
    }

}
</style>