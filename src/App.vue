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
    h1,h2,h3,p,a,textarea{
        margin:0;
        font-family: 'Open Sans', sans-serif;
    }
    a{
      cursor:pointer;
    }
  body{
    margin:0;
  }
  #app{
    margin:0;
    min-width: 350px;
    background-color: #252525;
  }
  .projectContainer{
    margin-left:auto;
    margin-right:auto;
  }
  html{
    scroll-behavior: smooth;
  }
</style>
