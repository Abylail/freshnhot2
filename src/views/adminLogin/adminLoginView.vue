<template>
<div>
    <div class="login-page" v-on:keyup.enter="loginButtonClick">
        <div class="login-container">
            <div class="login-text">Логин</div>
            <input type="text" v-model="login" class="login"/>
            <div class="login-text">Пароль</div>
            <input type="password" v-model="password" class="password"/>
            <div class="login-button-container">
                <button v-show="dataReady" v-on:click="loginButtonClick">Войти</button>
                <BaseMiniLoader v-show="!dataReady"/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import router from '@/router/index'
import BaseMiniLoader from "@/components/base/BaseLoader";
export default {
    name:'adminLoginView',
    components:{
      BaseMiniLoader,
    },
    data(){
        return{
            login:'',
            password:'',
            dataReady: true,
        }
    },
    methods:{
        async loginButtonClick(){
          if (this.login === '' || this.password === '') {
            return;
          }
          this.dataReady = false;
          await this.tryLogin([this.login,this.password]);
          this.dataReady = true;
          if(this.getLoginned){
              router.push("/admin-panel")
          }
        },
        ...mapActions({
            tryLogin:"loginAdmin/tryLogin"
        })
    },
    computed: {
        ...mapGetters({
            getLoginned: "loginAdmin/getLoginned"
        })
    }
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
    border:2px solid black;
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