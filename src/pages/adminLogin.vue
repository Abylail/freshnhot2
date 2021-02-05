<template>
<div>
    <div class="login-page">
        <div class="login-container">
            <div class="login-text">Логин</div>
            <input type="text" v-model="login" class="login"/>
            <div class="login-text">Пароль</div>
            <input type="password" v-model="password" class="password"/>
            <div class="login-button-container">
                <button v-on:click="loginButtonClick">Войти</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import router from '../router/index'
export default {
    name:'adminLogin',
    data(){
        return{
            login:'',
            password:'',
        }
    },
    methods:{
        loginButtonClick(){
            if(this.login=="abylai" && this.password=="tigr"){
                this.tryLogin([this.login,this.password])
            }
            else{
                this.login=""
                this.password=""
            }
            router.push("/admin-panel")

        },
        ...mapActions({
            tryLogin:"loginAdmin/tryLogin"
        })
    },
}
</script>
<style scoped>
.login-page{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
}
.login-container{
    width: 70vw;
    min-width: 200px;
    max-width: 400px;
}
input{
    width: 100%;
    height: 28px;
    border-radius: 4px;
    border:none;
    font-size: 22px;
}
.login{
    margin-bottom: 20px;
}
.login-text{
    padding-left:3px;
    color:white;
    font-size: 26px;
}

.login-button-container{
    margin-top:50px;
    width: 100%;
}
.login-button-container button{
    width: 100%;
    height: 30px;
    background-color: red;
    color:white;
    font-size: 20px;
    border-radius: 4px;
    border:none;
}

.header-admin{
    height: 60px;
    background-color: cornflowerblue;
    padding-left:10px;
    padding-right: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
}
@media(max-width:900px){
    .login-page{
        height: 850px;
    }
}

</style>