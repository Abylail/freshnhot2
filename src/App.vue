<template>
  <div id="app">
    <div class="projectContainer">
      <router-view :key="$route.path"></router-view>
      <footBlock/>
    </div>
  </div>
</template>

<script>
import footBlock from './components/footer/footBlock'

export default {
  name: 'App',
  components:{
    footBlock,
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,600;0,700;1,400&display=swap');
html {
  -webkit-tap-highlight-color: rgba(201, 224, 253, 0);
}
    h1,h2,h3,p,a,textarea{
        margin:0;
        font-family: 'Open Sans', sans-serif;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    *:focus {
    outline: none;
    }
    a,button{
      cursor:pointer;
    }
  body{
    margin:0;
  }
  #app{
    margin:0;
    min-width: 350px;
    background-color: #2C2C2C;
  }
  .projectContainer{
    margin-left:auto;
    margin-right:auto;
  }
  @media (min-width:500px){
    #app{
      background-color: white;
    }
  }
</style>
