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
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'keywords', content: 'доставка, доставка еды, доставка суши и пиццы, недорого, заказать, доставка, вкусно, быстро, Freshnhot, Алматы'},
      { name: 'description', content: 'Доставка суши, роллов, пиццы, рамена, WOK - Freshnhot ➤ слишком вкусные суши, напитки ✅ Промокод на 10% FNH10 ☎ +7-778-010-06-90 ✈ быстрая доставка, низкие цены ✅ Алматы.'}
    ],
    link: [
      { rel: 'preconnect', href: 'https://freshnhot.kz'},
      { rel: 'dns-prefetch', href: 'https://freshnhot.kz'}
    ],
    title: "Суши и пицца Freshnhot",
    description: "Доставка суши, роллов, пиццы, рамена, WOK - Freshnhot ➤ слишком вкусные суши, напитки ✅ Промокод на 10% FNH10 ☎ +7-778-010-06-90 ✈ быстрая доставка, низкие цены ✅ Алматы."
  },
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
    h1,h2,h3,p,a,textarea, strong{
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
    min-width: 300px;
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
